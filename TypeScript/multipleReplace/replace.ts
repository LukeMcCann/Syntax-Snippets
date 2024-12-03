
export type Delimeter = {
  from: string;
  to: string;
};

export interface ReplacementProps {
  searchString: string;
  replacements: {
    [key: string]: string;
  };
  searchDelimeters?: Delimeter[];
}

const DEFAULT_DELIMETERS: Delimeter[] = [{ from: '{{', to: '}}' }];

export const containsDelimiters = (str: string, delimiters: Delimeter[]): boolean => {
  return delimiters.some(delim => str.includes(delim.from) && str.includes(delim.to));
};

export const replaceMultiple = ({
  searchString,
  replacements,
  searchDelimeters = DEFAULT_DELIMETERS,
}: ReplacementProps) => {
  if (!containsDelimiters(searchString, searchDelimeters)) {
    return searchString;
  }

  const regexPatterns = searchDelimeters.map(delim => {
    const escapedFrom = delim.from.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const escapedTo = delim.to.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    return new RegExp(`${escapedFrom}(.*?)${escapedTo}`, 'g');
  });

  let result = searchString;
  regexPatterns.forEach(regex => {
    result = result.replace(regex, (match, p1) => {
      const replacementKey = p1.trim();
      return replacements[replacementKey] || match;
    });
  });

  return result;
};
