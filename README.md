# Skore-design :purple_heart:


### What is Skore-design?

Skore design is a react component library and design system for the all new SkoreOne.


### Why Skore-design?

Skore-design increases our design consistency, helps designers and devs understand components behaviors/layout and tests all in one place.


# Usage :rocket:

After you have cloned this repo, install the dependencies with:

```
npm install
```
or
```
yarn install
```


### Running Storybook

You can then start the application running:

```
npm run sb
```
or
```
yarn sb
```

All set. Now Access `http://localhost:6006` in your browser.


### Linting

```
npm run lint
```
or
```
yarn lint
```


### Testing

```
npm run jest
```
or
```
yarn jest
```


# Deploying the Component Library and Storybook

### Storybook
...to be done

### Library
(Will be changed in a near future)

1) First #QA your changes

2) Change the version on package.json

3) Build the library running:
```
npm run build
```
or
```
yarn build
```

4) Log in to NPM with valid credentials:
```
npm login
```

5) Time to publish:
```
npm publish
```

Done. Now just install the package in your react project and use the components.
