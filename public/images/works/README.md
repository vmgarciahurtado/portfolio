# Work Projects Images

This folder contains images for your portfolio projects.

## Structure

```
/public/images/works/
  ├── project-id/
  │   ├── cover.jpg        (Main image shown on card)
  │   ├── screenshot-1.jpg (Optional: Additional images for modal gallery)
  │   ├── screenshot-2.jpg (Optional: More gallery images)
  │   └── ...
```

## Instructions

1. Create a folder for each project using the project ID from `data/projects.json`
2. Add a `cover.jpg` file (required) - This will be shown on the project card
3. Optionally add more screenshots for the gallery in the modal
4. Update the `coverImage` and `gallery` paths in `data/projects.json`

## Image Recommendations

- **Cover image**: 1200x800px (3:2 aspect ratio)
- **Screenshots**: 1920x1080px or similar
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for optimal loading

## Example

For a project with id "my-awesome-app":

1. Create folder: `public/images/works/my-awesome-app/`
2. Add images:
   - `cover.jpg`
   - `screenshot-1.jpg`
   - `screenshot-2.jpg`
3. Update `data/projects.json`:
   ```json
   {
     "id": "my-awesome-app",
     "coverImage": "/images/works/my-awesome-app/cover.jpg",
     "gallery": [
       "/images/works/my-awesome-app/screenshot-1.jpg",
       "/images/works/my-awesome-app/screenshot-2.jpg"
     ]
   }
   ```

