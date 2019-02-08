// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const sectionNames = {
  COMPONENTS: 'components',
};

const sections = Object.values(sectionNames).map(name => {
  const pathPattern = `src/lib/${name}/**/__styleguide__/[A-Z]*.ts`;

  const sectionName = name
    .split('-')
    .map(word => word.replace(/[a-z]/, l => l.toUpperCase()))
    .join(' ');

  return {
    name: sectionName,
    components: pathPattern,
  };
});

module.exports = {
  title: 'React components library',
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  sections: [...sections],
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {},
  ).parse,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.ts');

    return `import { ${name} } from 'react-components-lib';`;
  },
};
