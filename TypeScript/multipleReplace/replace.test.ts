import { containsDelimiters, replaceMultiple, Delimiter } from '../../../src/lib/util/replace';

describe('containsDelimiters function', () => {
  it('returns true when delimiters are found in the string', () => {
    const str = 'Hello, {{name}}!';
    const delimiters = [{ from: '{{', to: '}}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(true);
  });

  it('returns true when any delimiter is found in the string', () => {
    const str = 'Hello, {{name}} and {age}!';
    const delimiters = [{ from: '{{', to: '}}' }, { from: '{', to: '}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(true);
  });

  it('returns true when multiple occurrences of the delimiter are present', () => {
    const str = 'Hello, {{name}}! Your name is {{name}}!';
    const delimiters = [{ from: '{{', to: '}}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(true);
  });

  it('returns true when delimiters appear in different parts of the string', () => {
    const str = 'Hello, "name" and {age} are here';
    const delimiters = [{ from: '"', to: '"' }, { from: '{', to: '}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(true);
  });

  it('returns false when no delimiters are found in the string', () => {
    const str = 'Hello, world!';
    const delimiters = [{ from: '{{', to: '}}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(false);
  });

  it('returns false when only one part of the delimiter is present', () => {
    const str = 'Hello, {{name!';
    const delimiters = [{ from: '{{', to: '}}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(false);
  });

  it('returns false for an empty string', () => {
    const str = '';
    const delimiters = [{ from: '{{', to: '}}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(false);
  });

  it('returns false when delimiters do not match any part of the string', () => {
    const str = 'Hello, name!';
    const delimiters = [{ from: '{{', to: '}}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(false);
  });

  it('returns false when delimiters are partially incorrect', () => {
    const str = 'Hello, {name}!';
    const delimiters = [{ from: '{{', to: '}}' }];
    const result = containsDelimiters(str, delimiters);
    expect(result).toBe(false);
  });
});

describe('replaceMultiple function', () => {
  it('returns the original string if no delimiters are present', () => {
    const searchString = 'Hello world';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello world');
  });

  it('replaces content between delimiters with corresponding replacements', () => {
    const searchString = 'Hello, {{name}}!';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, Bob!');
  });

  it('does not replace content if no matching replacement key is found', () => {
    const searchString = 'Hello, {{unknown}}!';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, {{unknown}}!');
  });

  it('supports multiple delimiters and replaces content correctly for each delimiter', () => {
    const searchString = 'Hello, {{name}} and {age}!';
    const replacements = { age: '25', name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }, { from: '{', to: '}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, Bob and 25!');
  });

  it('returns the original string when delimiters do not exist in the string', () => {
    const searchString = 'Hello, name and age!';
    const replacements = { age: '25', name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }, { from: '{', to: '}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, name and age!');
  });

  it('replaces multiple occurrences of the same placeholder in the string', () => {
    const searchString = 'Hello, {{name}}! Your name is {{name}}!';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, Bob! Your name is Bob!');
  });

  it('returns the original string if delimiters are not present but replacements exist', () => {
    const searchString = 'Hello, world!';
    const replacements = { world: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, world!');
  });

  it('handles empty string correctly', () => {
    const searchString = '';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('');
  });

  it('handles empty replacement object correctly', () => {
    const searchString = 'Hello, {{name}}!';
    const replacements = {};
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, {{name}}!');
  });

  it('returns the original string if no delimiters match', () => {
    const searchString = 'Hello, name!';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({ replacements, searchDelimiters, searchString });

    expect(result).toBe('Hello, name!');
  });

  it('supports multiple matching replacement delimiter formats', () => {
    // eslint-disable-next-line max-len
    const searchString = 'Hello, "name" and \'age\' are here, {city}, &&country&&, $$currency$$, @@language@@, ((status)) and ##code##, !!priority!!';

    const replacements = {
      age: '30',
      city: 'New York',
      code: '12345',
      country: 'USA',
      currency: 'USD',
      language: 'English',
      name: 'Bob',
      priority: 'High',
      status: 'Active',
    };

    const searchDelimiters: Delimiter[] = [
      { from: '"', to: '"' },
      { from: "'", to: "'" },
      { from: '{', to: '}' },
      { from: '{{', to: '}}' },
      { from: '&&', to: '&&' },
      { from: '$$', to: '$$' },
      { from: '@@', to: '@@' },
      { from: '((', to: '))' },
      { from: '(', to: ')' },
      { from: '##', to: '##' },
      { from: '!!', to: '!!' },
    ];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe('Hello, Bob and 30 are here, New York, USA, USD, English, Active and 12345, High');
  });

  it('supports multiple matching replacement delimiter formats with multiple occurrences', () => {
    // eslint-disable-next-line max-len
    const searchString = 'Hello, "name" and "name"! Your age is {age}, and {age} again. The city is {{city}} and {{city}} again. The currency is $$currency$$ and $$currency$$ again. The status is ((status)) and ((status)) again.';

    const replacements = {
      age: '30',
      city: 'New York',
      currency: 'USD',
      name: 'Bob',
      status: 'Active',
    };

    const searchDelimiters: Delimiter[] = [
      { from: '"', to: '"' },
      { from: "'", to: "'" },
      { from: '{', to: '}' },
      { from: '{{', to: '}}' },
      { from: '$$', to: '$$' },
      { from: '((', to: '))' },
      { from: '!!', to: '!!' },
    ];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    // eslint-disable-next-line max-len
    expect(result).toBe('Hello, Bob and Bob! Your age is 30, and 30 again. The city is New York and New York again. The currency is USD and USD again. The status is Active and Active again.');
  });

  it('does not replace anything if delimiters are present but no matching replacements exist', () => {
    const searchString = 'Hello, {{name}}!';
    const replacements = { age: '30' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe('Hello, {{name}}!');
  });

  it('returns the original string if the delimiters array is empty', () => {
    const searchString = 'Hello, world!';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe('Hello, world!');
  });

  it('returns the original string if delimiters are invalid or mismatched', () => {
    const searchString = 'Hello, "name" and "age"!';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '<', to: '>' }];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe('Hello, "name" and "age"!');
  });

  it('does not replace anything if the replacements object is empty', () => {
    const searchString = 'Hello, {{name}}!';
    const replacements = {};
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe('Hello, {{name}}!');
  });

  it('returns an empty string when the input string is empty', () => {
    const searchString = '';
    const replacements = { name: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe('');
  });

  it('does not replace content if no delimiters match but replacements exist', () => {
    const searchString = 'Hello, world!';
    const replacements = { world: 'Bob' };
    const searchDelimiters: Delimiter[] = [{ from: '{{', to: '}}' }];

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe('Hello, world!');
  });

  it('uses default delimiters when none are provided', () => {
    const searchString = 'Hello, {{name}}!';
    const replacements = { name: 'Bob' };

    const result = replaceMultiple({ replacements, searchString });

    expect(result).toBe('Hello, Bob!');
  });

  it('uses custom delimiters when provided and does not use default delimiters', () => {
    const searchString = 'Hello, [[name]]!';
    const replacements = { name: 'Bob' };
    const customDelimiters: Delimiter[] = [{ from: '[[', to: ']]' }];

    const result = replaceMultiple({ replacements, searchDelimiters: customDelimiters, searchString });

    expect(result).toBe('Hello, Bob!');
  });

  it('performs replacements swiftly for huge string with many delimiters', () => {
    const replacements = {
      adipiscing: 'quis',
      ante: 'vestibulum',
      arcu: 'sed',
      auctor: 'neque',
      bibendum: 'erat',
      consectetur: 'adipiscing',
      dictum: 'ipsum',
      dui: 'porttitor',
      eget: 'semper',
      elit: 'massa',
      erat: 'consectetur',
      eros: 'accumsan',
      felis: 'nulla',
      fermentum: 'vitae',
      finibus: 'nulla',
      hendrerit: 'molestie',
      integer: 'congue',
      ipsum: 'lorem',
      ligula: 'aliquam',
      lorem: 'ipsum',
      maecenas: 'dictum',
      malesuada: 'nulla',
      nisi: 'vitae',
      nulla: 'curabitur',
      porttitor: 'magna',
      sapien: 'euismod',
      sit: 'fugiat',
      sollicitudin: 'orci',
      tortor: 'libero',
      turpis: 'vel',
      vestibulum: 'pharetra',
      vitae: 'neque',
      volutpat: 'euismod',
    };

    const searchDelimiters: Delimiter[] = [
      { from: '{{', to: '}}' },
      { from: '$$', to: '$$' },
      { from: '@@', to: '@@' },
      { from: '!!', to: '!!' },
      { from: '#', to: '#' },
      { from: '%', to: '%' },
      { from: '^^', to: '^^' },
      { from: '**', to: '**' },
      { from: '%%', to: '%%' },
      { from: '&&', to: '&&' },
      { from: '~~', to: '~~' },
      { from: '++', to: '++' },
      { from: '==', to: '==' },
      { from: '__', to: '__' },
      { from: '<<', to: '>>' },
      { from: '||', to: '||' },
      { from: '::', to: '::' },
      { from: '<<>>', to: '<<>>' },
      { from: '%%%', to: '%%%' },
      { from: '<<>>', to: '<<>>' },
      { from: '{||}', to: '{||}' },
      { from: '@@@', to: '@@@' },
      { from: '(((', to: ')))' },
      { from: '~~~', to: '~~~' },
      { from: '(())', to: '(())' },
      { from: '||!', to: '||!' },
      { from: '[[]]', to: '[[]]' },
      { from: '<<>>', to: '<<>>' },
      { from: '[[{}]]', to: '[[{}]]' },
      { from: '[**]', to: '[**]' },
      { from: '(<<>>)', to: '(<<>>)' },
      { from: '[[]]', to: '[[]]' },
      { from: '##', to: '##' },
      { from: '!!**', to: '!!**' },
      { from: '[<<>>]', to: '[<<>>]' },
      { from: '[[##]]', to: '[[##]]' },
      { from: '&&&&', to: '&&&&' },
      { from: '::::', to: '::::' },
      { from: '****', to: '****' },
      { from: '||$$||', to: '||$$||' },
      { from: '[[%%]]', to: '[[%%]]' },
      { from: '++<<>>', to: '++<<>>' },
      { from: '$$%', to: '$$%' },
      { from: '~~~<<>>~~~', to: '~~~<<>>~~~' },
      { from: '[**%%**]', to: '[**%%**]' },
      { from: '((((((((', to: '))))))))' },
      { from: '&&&&&&', to: '&&&&&&' },
      { from: '[[**%**]]', to: '[[**%**]]' },
    ];

    // eslint-disable-next-line max-len
    const largeString = `Lorem {{ipsum}} dolor sit amet, $$consectetur$$ adipiscing elit. Donec a hendrerit quam. Vivamus molestie volutpat orci ac !!finibus!!. Maecenas dictum ante sit amet nisl tempor ullamcorper. Aenean a nulla et lectus scelerisque convallis quis in orci. Nunc ac nibh id velit porttitor pharetra. Sed blandit pulvinar hendrerit. Nam porttitor lacinia consectetur. Integer malesuada libero ac lorem convallis, non fermentum nisl tincidunt. Praesent est tellus, faucibus eu ante nec, pharetra rutrum neque. Pellentesque id condimentum ipsum. $@Vestibulum@$ nec vestibulum enim, sollicitudin convallis eros. Integer fermentum erat sit amet ipsum tristique, in porttitor leo pellentesque. Sed sed mi in lectus hendrerit condimentum et id tellus. Suspendisse rhoncus ipsum eget mi consequat accumsan. Proin lacinia, ligula quis semper euismod, sem libero vehicula sapien, eu consectetur sapien massa ac lectus. Etiam quis congue neque, quis molestie orci. Sed a posuere nulla. Morbi ullamcorper, neque eu suscipit porta, mauris justo pellentesque risus, ut volutpat tortor libero ut tortor. Vivamus vitae augue eget tortor efficitur consequat. Maecenas volutpat est lectus, quis volutpat nibh molestie nec. Maecenas ultrices tempus metus, quis volutpat erat bibendum eu. Duis leo lacus, malesuada nec porttitor a, cursus ut sapien. Fusce fermentum nibh quis arcu ultrices, eget hendrerit lacus laoreet. Etiam sed facilisis arcu, eu eleifend urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas magna nulla, venenatis sit amet rhoncus eu, dignissim eget elit. Maecenas tincidunt mollis justo, non egestas quam luctus nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In sed pharetra ligula, sed scelerisque sem. Nunc vel turpis a ligula consectetur molestie eget quis arcu. Ut auctor ligula viverra sapien feugiat dictum. In vitae augue lobortis, sodales purus pulvinar, varius augue. Vivamus in dapibus libero. Morbi venenatis elit quis sapien rutrum ullamcorper. Cras sem justo, dictum at ipsum vel, blandit blandit eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra luctus tincidunt. Integer nec nisi eget urna euismod aliquet id quis mauris. Etiam elit tortor, ultrices consequat pulvinar vel, vehicula sed velit. Nam sem tellus, rutrum a nulla quis, cursus iaculis neque. Phasellus sed sollicitudin lorem, eget semper eros. Maecenas faucibus porta tellus, eu pellentesque ante mattis vitae. Ut aliquet eros eu pellentesque hendrerit. Nam tortor felis, cursus vel aliquet sit amet, fringilla id elit. In convallis, metus sed porta imperdiet, orci lectus sagittis enim, a efficitur urna est a orci. Donec condimentum nunc vel turpis luctus viverra. Aenean a molestie neque. Aliquam erat volutpat. Nulla lacinia, ligula in ornare ullamcorper, ante lectus fringilla lorem, in venenatis est dui eu dolor. Maecenas vestibulum sapien quis felis cursus mollis. Donec semper ac metus dignissim porttitor. Vestibulum ut pulvinar sapien. Ut vehicula ligula nisi, vitae tempor purus elementum ut. Curabitur ac placerat mi, id posuere lectus. Proin vitae nulla vitae ex vehicula porta ut eget metus.`;

    const start = performance.now();

    replaceMultiple({
      replacements,
      searchDelimiters,
      searchString: largeString,
    });

    const end = performance.now();
    const timeTaken = end - start;

    // This is a larger dataset than we would normally expect
    // so long as the time is closer to 1ms on this set it
    // is as performant as can be, usual cases only have 3-10.
    expect(Math.floor(timeTaken)).toEqual(1);
  });

  it('replaces content with non-regular delimiters', () => {
    const replacements = {
      age: '25',
      city: 'Wonderland',
      name: 'Alice',
      replaceme: 'Chicken',
      thing: 'meat',
    };

    const searchDelimiters: Delimiter[] = [
      { from: '<!!', to: '!!>' },
      { from: '<~~~~', to: '~~~~>' },
      { from: '{~!', to: '!~}' },
      { from: '<<<', to: '>>>' },
    ];

    const searchString = `
        Hello <!!name!!> from <~~~~city~~~~>.
        You are <!!age!!> years old.
        <!!name!!> is a friend of <~~~~city~~~~>.
        <<<replaceme>>> is a {~!thing!~}.
      `;

    const expectedResult = `
        Hello Alice from Wonderland.
        You are 25 years old.
        Alice is a friend of Wonderland.
        Chicken is a meat.
      `;

    const result = replaceMultiple({
      replacements,
      searchDelimiters,
      searchString,
    });

    expect(result).toBe(expectedResult);
  });
});
