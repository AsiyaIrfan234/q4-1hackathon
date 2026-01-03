# Research: Update GitHub Repository Link to Personal Account (Docusaurus)

## Decision: Configuration Location
The GitHub link is located in `physical_book/docusaurus.config.js` in the navbar configuration, specifically at line 100 in the items array:

```javascript
{
  href: 'https://github.com/facebook/docusaurus',
  label: 'GitHub',
  position: 'right',
}
```

## Rationale
The Docusaurus configuration file contains a themeConfig section with a navbar property. Within the navbar.items array, there's a GitHub link object that currently points to the default Docusaurus repository. This needs to be updated to point to the user's GitHub profile: https://github.com/AsiyaIrfan234.

## Additional Findings
There's another GitHub link in the footer section at line 144 that also points to the default Docusaurus repository:
```javascript
{
  label: 'GitHub',
  href: 'https://github.com/facebook/docusaurus',
}
```

This should also be updated to maintain consistency.

## Alternatives Considered
1. Keep the default Docusaurus link - This would not meet the requirement to point to the user's personal GitHub profile
2. Create a custom navbar component - This would violate the constraint of not modifying navbar layout or styles
3. Update only the navbar GitHub link - This would leave the footer link pointing to the wrong repository

## Implementation Strategy
Update both GitHub links in the docusaurus.config.js file:
1. Navbar GitHub link (line 100)
2. Footer GitHub link (line 144)

Both should point to https://github.com/AsiyaIrfan234 while preserving all other configuration values.