# Nebula Components
*The components library for Project Nebula*

**A work in progress**

## About
Part of [Project Nebula](https://github.com/acmutd/nebula-web), Nebula
Components is a library for building web apps using specialized React components
to easily display school- and student-related information.

This repository, `nebula-components`, contains code for all core Project Nebula
components.

## Contributing
Contributions are welcome!

This project uses the [MIT License](./LICENSE.md).

### Process
See the [contribution guide](./CONTRIBUTING.md) on how to contribute to the
repository. Once you understand the basics, then see the [issues](https://github.com/acmutd/nebula-components)
for the repository to get started.

### Set-up
The following will clone the repository to your machine and start the local
development server.

```shell script
git clone https://github.com/acmutd/nebula-components.git
cd nebula-components
npm run storybook
```

This project uses Storybook to visualize and document components. Open up the
link ([localhost:6006](https://localhost:6006) by default) to the component
visualizer. When you make and save changes to the repository, they will update
in the Storybook UI.

### Updating Component Documentation
After changes have been merged into `master`, run the `build-storybook` script
to create a static version of the components visualizer:

```shell script
npm run build-storybook
```

This should be deployed to GitHub Pages.

### Publishing Process
On merge to `master`, the following should happen:
- Storybook static website build
- Storybook component docs published to docs website
- Publish to npm under `@nebula/components`

## Maintainers

### Contributors
- Willie Chalmers III, Project Lead
- Rajmeet Juneja, Developer

### Contact
This project is maintained by ACM Development, a division of ACM UTD. If you have
any questions about this project or Project Nebula, see the [#nebula-support](https://discord.com/channels/692266201644007424/811419400753905714)
channel on the ACM Discord server (accessible at [acmutd.co/discord](https://acmutd.co/discord)).

For more formal inquiries, send us a message at [development@acmutd.co](mailto:development@acmutd.co)
with "[nebula-components]" in the title. Please be as detailed as possible so we
can best assist you.

![ACM Development](https://www.acmutd.co/brand/Development/Banners/light_dark_background.png)
