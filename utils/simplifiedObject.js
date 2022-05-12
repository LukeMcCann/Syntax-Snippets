  if (isObject(value)) {
    let simplifiedValue = Object.assign(value, {});
    simplifiedValue = Object.entries(simplifiedValue).map(([key, propVal]) => {
      if (isObject(propVal)) {
        delete simplifiedValue[key];
        simplifiedValue[key] = '{...}';
      }
      return simplifiedValue;
    }).filter(element => element !== undefined).pop();
    return JSON.stringify(simplifiedValue);
  }
