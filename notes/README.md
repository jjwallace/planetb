# PLANET B NOTES
![Image of a galaxy and planet](https://github.com/jjwallace/planetb/blob/main/notes/pictures/firesky.jpg)

```bash
What are you doing in the **DEV FOLDER!**
```

## Notes

### Todo Ideas
Planet Generator Brainstorm

### Other
Keith is a dork

# CAPTAINS LOG

### June 22
**Client Interaction**
The client can use the keys to move around an object in the solar system.  It is really chunky right now. The test object spins like crazy and is quite delayed.  We need to add some interpolation.
- MR. SIR. WALLACE

![Image of a galaxy and planet](https://github.com/jjwallace/planetb/blob/main/notes/pictures/screenshots/2022-06-22.png)

### June 8
**Changing to PIXI from PHASER**
This is the last screenshot from the phaser version.  Switching to PIXI to try a new renderer.
- MR. SIR. WALLACE

![Image of a galaxy and planet](https://github.com/jjwallace/planetb/blob/main/notes/pictures/screenshots/2022-06-08.png)

### June 2
**It's Alive!**
Early prototype working; planets/moons rotate around a parent.  We can zoom in a little and the camera doesnt suck. 
- MR. SIR. WALLACE

![Image of a galaxy and planet](https://github.com/jjwallace/planetb/blob/main/notes/pictures/screenshots/screenshot-june2.png)

//Here is some crap to save
 // this.background.width = this.viewport.scale * 1000;
    // this.background.height = this.viewport.scale * 1000;

    // const minZoom = 3;
    // const maxZoom = 7;
    // let zoom = this.viewport.scale;
    // let zoomRounded = maxZoom - zoom.x * maxZoom;
    // if (zoomRounded < minZoom) {
    //   zoomRounded = minZoom;
    // }
    // // console.warn('zoomed R: ', zoomRounded);
    // for (let i = 0; i < this.indexFilter.length; i++) {
    //   let v = this.indexFilter[i];
    //   // this.entities[v].medal.alpha = (1 / zoomRounded + 3);
    //   this.entities[v].medal.scale.set(zoomRounded / 2.5);
    // }