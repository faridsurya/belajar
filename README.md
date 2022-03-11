# Wordpress Template Generator

## Installation

```
npm install -g
```

## How to Use?

### 1. Create new wordpress theme

```
shdwp new YourThemeName
```

### 2. Generate New Widget

```
shdwp generate widget 'path/to/file.json'
```

**Example JSON format:**

```
{
    "title" : "SHD Call to Action",
    "id"    : "shd_cta_widget",
    "description" : "Display block Call to Action",
    "form"  : [
        {
            "label" : "Title",
            "id"    : "title",
            "type"  : "text"
        },        
        {
            "label" : "Description",
            "id"    : "description",
            "type"  : "textarea"
        },
 	    {
            "label" : "Style",
            "id"    : "style",
            "type"  : "options",
	    "options" :[
            {"label" : "Style 1", "value" : "style-1"},
            {"label" : "Style 2", "value" : "style-2"},
            {"label" : "Style 3", "value" : "style-3"}		
		]
        },
        {
            "label" : "Button Text",
            "id"    : "btn_text",
            "type"  : "text"
        },
        {
            "label" : "Button URL",
            "id"    : "btn_url",
            "type"  : "text"
        },
        {
            "label" : "Image",
            "id"    : "image",
            "type"  : "image"
        }
    ]
}
```

### 3. Generate Post Type

```
shdwp generate post-Type
```

### 4. Generate Theme Customizer

```
shdwp generate customizer path/to/file.json
```

**Example JSON format:**

```
{
    "id"    : "footer-data",
    "title" : "Footer Data",
    "forms" : [
        {
            "id"    : "fb",
            "label" : "Facebook Url",
            "type"  : "text"
        },
        {
            "id"    : "footer-bg-image",
            "label" : "Footer Background Image",
            "type"  : "image"
        },
        {
            "id"    : "footer-show-social",
            "label" : "Show Social Buttons?",
            "type"  : "checkbox"
        }
    ]
}
```

