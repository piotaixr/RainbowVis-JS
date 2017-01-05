import Rainbow from './RainbowVis'

window.onload = function () {
    try {
        // Mappings
        // Default
        let rainbow = new Rainbow(); // by default, range is 0 to 100
        let s = '<h3>Default</h3>';
        for (let i = 0; i <= 100; i = i + 10) {
            let hex = '#' + rainbow.colorAt(i);
            s += '<span style="color:' + hex + '">' + i + ' -&gt; ' + hex + '</span><br/>';
        }

        // Custom
        s += '<h3>Custom</h3>';
        rainbow.setSpectrum('red', 'FFFFFF', '#00ff00');
        rainbow.setNumberRange(-0.5, 0.5);
        for (let i = -5; i <= 5; i++) {
            let hex = '#' + rainbow.colorAt(i / 10);
            s += '<span style="color:' + hex + '">' + i / 10 + ' -&gt; ' + hex + '</span><br/>';
        }
        document.getElementById("mappings").innerHTML = s;

        // Wattages
        const wattages = [
            ["Clothes Dryer", 5000],
            ["Air Conditioner (36,000 BTU)", 4500],
            ["Water Heater (Quick Recovery)", 4500],
            ["Range (Oven)", 2660],
            ["Range (Self Cleaning Cycle)", 2500],
            ["Power Tools (Circular Saw)", 1800],
            ["Vacuum Cleaner", 1560],
            ["Air Conditioner (12,000 BTU)", 1500],
            ["Convection Oven", 1500],
            ["Curling Iron", 1500],
            ["Heater (Portable)", 1500],
            ["Jacuzzi (Maintain Temperature, 2 Person)", 1500],
            ["Microwave Oven", 1500],
            ["Toaster", 1400],
            ["Dishwasher (Dry Cycle)", 1200],
            ["Fry Pan", 1200],
            ["Waffle Iron", 1200],
            ["Coffee Maker (Auto Drip)", 1165],
            ["Hair Dryer (Hand Held)", 1000],
            ["Heater (Auto Engine, Winter)", 1000],
            ["Iron", 1000],
            ["Motor (1 HP)", 1000],
            ["Auto Engine Heater", 600],
            ["Washer", 512],
            ["Sump Pump (1/2 HP)", 500],
            ["Water Pump (1/2 HP)", 460],
            ["Dehumidifier (20 Pints, Summer)", 450],
            ["Refrigerator/Freezer (Frostfree,17.5cu.ft.)", 450],
            ["Freezer (Automatic Defrost 15 cu. ft.)", 440],
            ["Disposal", 420],
            ["Compactor", 400],
            ["Fan (Attic)", 400],
            ["Blender", 385],
            ["Waterbed Heater (Queen Size)", 375],
            ["Computer (With Monitor and Printer)", 365],
            ["Satellite Dish (Includes Receiver)", 360],
            ["Freezer (Manual Defrost, 15 cu. ft.)", 350],
            ["Garage Door Opener", 350],
            ["Heating System (Warm Air Fan)", 312],
            ["CD, Tape, Radio, Receiver System", 250],
            ["Heat Lamp", 250],
            ["Dishwasher (Wash Cycle)", 200],
            ["Television (Color, Solid State)", 200],
            ["Heat Tape (30ft., Winter)", 180],
            ["Humidifier (Winter)", 177],
            ["Electric Blanket", 175],
            ["Battery Charger (Car)", 150],
            ["Lighting (Outdoor Floor)", 120],
            ["Mixer, Hand", 100],
            ["Fan (Ceiling)", 80],
            ["Lighting (Incandescent)", 75],
            ["Radio", 71],
            ["Bug Zapper", 40],
            ["Lighting (Fluorescent)", 40],
            ["VCR/DVD", 21],
            ["Lighting (Compact Fluorescent)", 18],
            ["Clock", 3]
        ];

        let heatmap = new Rainbow();
        heatmap.setSpectrum('black', 'blue', 'aqua', 'lime', 'yellow', 'red');
        heatmap.setNumberRange(0, 5000);
        let table = '<table><tr><th>Appliance</th><th>Typical Wattage</th></tr>';
        for (let i = 0; i < wattages.length; i++) {
            let appliance = wattages[i][0];
            let watts = wattages[i][1];
            table += '<tr><td>' + appliance + '</td>';
            let hexColour = '#' + heatmap.colorAt(watts);
            table += '<td style="background-color:' + hexColour + '; color: #fff">' + watts + '</td></tr>';
        }
        table += '</table>';
        table += '<p>Source: <a href="http://www.cornhusker-power.com/householdappliances.asp">Operating Costs of Household Appliances</a></p>';
        document.getElementById("wattages").innerHTML = table;

        // Canvas Drawing
        const RAINBOW_WIDTH = 60;
        const RAINBOW_RADIUS = 130;
        let rainbow2 = new Rainbow();
        rainbow2.setNumberRange(1, RAINBOW_WIDTH);
        rainbow2.setSpectrum('FF0000', 'FFFF00', '00FF00', '00FFFF', '0000FF', 'FF00FF');

        let canvas = document.getElementById('MyRainbow');
        let context = canvas.getContext('2d');

        context.lineWidth = 1;
        for (let i = 1; i <= RAINBOW_WIDTH; i++) {
            context.beginPath();
            context.arc(canvas.width / 2, canvas.width / 2, RAINBOW_RADIUS - i + 1, Math.PI, 0, false);
            context.strokeStyle = '#' + rainbow2.colorAt(i);
            context.stroke();
        }
    } catch (err) {
        console.error(err);
    }
};