import type { InfoGuideModule } from "@/components/guide/InfoGuidePage";

const guide: InfoGuideModule = {
  kind: "info",
  guideSlug: "dimmer-switch-types-explained",
  guideTitle: "Dimmer Switch Types Explained: Which One Works With LED Bulbs",
  metaTitle: "Dimmer Switch Types Explained for LED Bulbs",
  metaDescription: "Leading edge, trailing edge, minimum load and 3-way wiring decide whether an LED dimmer glides smoothly or flickers and buzzes. Here is how to match them.",
  heroImage: "/images/articles/dimmer-rotary-wall.webp",
  lastUpdated: "2026-11-20",
  readTime: "11 min",
  quickAnswer: "For LED bulbs, choose a trailing edge (also called ELV) or a purpose-built LED dimmer that lists a minimum load low enough for your bulbs, usually 10 watts or less. Old leading edge triac dimmers were designed for incandescent loads of 40 watts and up, so they often make LEDs flicker, buzz or drop out at the low end. Check that both the bulb and the dimmer say dimmable, count total bulb wattage against the minimum, and use a matching 3-way dimmer if the circuit has two switches.",
  html: `<p>A dimmer that worked for twenty years in a room full of incandescent bulbs can turn into a source of constant irritation the week you swap in LEDs. The lights hum, the dial has a dead zone where nothing happens, or the bulbs pulse faintly at the lowest setting. None of that means the bulbs are bad. It means two pieces of electronics, the dimmer and the driver inside each bulb, are speaking slightly different languages.</p>

<p>This guide explains the types of dimmer you will actually meet in a living room, what the numbers on the box mean, and how to pair them with the bulbs you already own. It also covers the awkward cases: a circuit with two switches, a fixture with only one or two small bulbs, and the smart dimmer that promises to fix everything.</p>

<h2 id="how-dimmers-work">How a wall dimmer actually reduces light</h2>

<p>A wall dimmer does not lower the voltage in a smooth way, as a water tap lowers flow. Household current alternates 60 times a second, and a dimmer chops each half cycle so the bulb only receives part of the wave. The more of the wave it removes, the dimmer the light. That chopping is the origin of most dimming problems, because an LED bulb is not a simple resistive filament. It contains a small power supply, called a driver, that has to interpret the chopped signal and decide how much current to send to the diodes.</p>

<p>An incandescent filament simply glows less when it receives less energy, and it does so in a forgiving, linear way. A driver has to be built to read the signal correctly. Cheap drivers misread it, which produces the flicker and buzz people associate with LED dimming. Good dimmable bulbs include circuitry that smooths the signal and holds a steady output, which is why two bulbs that look identical on a shelf can behave very differently on the same dimmer.</p>

<h2 id="leading-vs-trailing">Leading edge versus trailing edge</h2>

<p>The two main technologies differ in which part of the wave they cut away. A leading edge dimmer, usually built around a triac, switches on partway through each half cycle, so it cuts off the front of the wave. These are the classic dimmers installed in homes for decades, they are inexpensive, and they pair well with resistive incandescent and halogen loads at 40 watts and above.</p>

<p>A trailing edge dimmer, often marketed as ELV (electronic low voltage), starts the wave normally and cuts off the tail. The cut is gentler on electronics because it avoids a sudden jump in voltage at the start of each cycle. That sudden jump is what makes an LED driver ring, hum or flicker. For this reason trailing edge designs are generally quieter and smoother with LED bulbs, and they are the better default when your living room is lit entirely with LEDs.</p>

<table>
<thead><tr><th>Type</th><th>What it cuts</th><th>Best with</th><th>Typical problem with LEDs</th></tr></thead>
<tbody>
<tr><td>Leading edge (triac)</td><td>Front of each half wave</td><td>Incandescent, halogen, some magnetic transformers</td><td>Buzz, flicker, dead zone at the bottom of the dial</td></tr>
<tr><td>Trailing edge (ELV)</td><td>Back of each half wave</td><td>Electronic transformers, most LED bulbs</td><td>Does not suit magnetic transformers</td></tr>
<tr><td>Universal LED dimmer</td><td>Either, selectable or automatic</td><td>Mixed or unknown loads</td><td>Higher purchase price, a bit more setup</td></tr>
<tr><td>Smart dimmer</td><td>Usually trailing edge with a controller</td><td>Whole-room scenes and scheduling</td><td>Needs a neutral wire in many models</td></tr>
</tbody>
</table>

<p>Many modern LED bulb packages state which type of dimmer they want. If a bulb says it is designed for leading edge dimmers, it contains extra circuitry to tolerate that sharper signal, and a leading edge dimmer is fine. If the packaging says nothing, buying a trailing edge or LED-rated dimmer is the safer bet.</p>

<h2 id="minimum-load">Minimum load: the number that gets ignored</h2>

<p>Every dimmer has a rated maximum load, often 600 watts for incandescent. Fewer people notice that it also has a minimum load, and for LEDs this is the figure that matters most. A traditional dimmer may need 40 watts or more flowing through it to operate stably, because the triac needs a certain current to stay latched during each half cycle. When it only feeds a pair of 8 watt LED bulbs, the load falls below that threshold and the dimmer misbehaves: flicker, ghosting where the bulbs glow when off, or lights that cut out at about 20 percent.</p>

<p>Dimmers designed for LEDs list minimum loads of around 10 watts or sometimes as low as 3 watts. Add up the wattage of every bulb on the circuit, using the actual LED wattage and not the old incandescent equivalent printed in large type on the box. If the total sits below the dimmer minimum, you have three options: choose a dimmer with a lower minimum, add bulbs to the circuit, or install a small bypass load. Adding bulbs is the simplest if the fixture has empty sockets.</p>

<p>The most common failure in a living room is the single three-bulb fixture on a leading edge dimmer. Three 5 watt LEDs total only 15 watts, well below what a legacy dimmer wants, and the symptom is a light that cannot dim smoothly below the halfway point. The fix is rarely new bulbs. It is a dimmer matched to a small load.</p>

<figure>
  <img src="/images/articles/dimmer-slide-wall.webp" alt="A beige slide dimmer switch on a wall plate" />
  <figcaption>A slide-style wall dimmer. The rated load printed on the faceplate or box is the figure to compare against your total bulb wattage.</figcaption>
</figure>

<h2 id="matching-bulb">Matching the bulb to the dimmer</h2>

<p>Both ends must be dimmable. A non-dimmable LED on a dimmer will either flash, burn out its driver early or simply refuse to dim, and a dimmable bulb on a standard on/off switch is wasted money. Look for the word dimmable on the bulb base or packaging. Reputable manufacturers also publish compatibility lists that name specific dimmer models, and for a room where you plan to buy a dozen bulbs, checking the list before you commit saves a lot of swapping.</p>

<p>Bulb quality shows most at the low end. A good dimmable LED can reach about 10 percent of full output or lower with no flicker, while a poor one cuts out at 30 percent. Mixing different bulb brands on the same dimmer also causes trouble, because each driver responds differently, and the lights drift apart in brightness as you turn them down. In a living room, where several sources share a circuit, buy all the bulbs for one dimmer as a single matching set. Color temperature should match too; our guide to <a href="/guide/color-temperature-explained-2700k-vs-3000k">2700K versus 3000K</a> explains why a mixed set looks wrong even at full brightness.</p>

<h2 id="flicker-buzz">Diagnosing flicker, buzz and ghosting</h2>

<p>Each symptom has a typical cause, and working through them in order is faster than replacing everything at once.</p>

<ul>
<li><strong>Flicker at low brightness:</strong> the load is below the dimmer minimum, or the bulb driver is a low-quality design. Check the total wattage first.</li>
<li><strong>Buzzing from the wall plate:</strong> usually a leading edge dimmer working too hard on an LED load. A trailing edge dimmer typically silences it.</li>
<li><strong>Buzzing from the bulb itself:</strong> the driver is vibrating at the chopped frequency. A different brand of bulb is the remedy.</li>
<li><strong>Ghosting, a faint glow when off:</strong> a small leakage current passes through the dimmer even when off, and an LED needs very little to glow. Some dimmers have a neutral wire connection that eliminates it, and bulbs with a different driver may not glow at all.</li>
<li><strong>Bulbs that flash or pop on at turn-on:</strong> the inrush of current can confuse certain drivers. Trailing edge dimmers with soft-start behavior reduce this.</li>
</ul>

<p>One non-obvious point: a dimmer that is slightly noisy with a single bulb can behave much better when you add a second or third bulb, because more total load stabilizes it. If a single small lamp misbehaves, move it to a different circuit or add a second bulb in the same fixture before spending on a replacement dimmer.</p>

<h2 id="three-way">Three-way circuits and multi-location dimming</h2>

<p>Living rooms commonly have two switches controlling the same ceiling light, one at each entrance. This is a three-way circuit, and an ordinary single pole dimmer will not work there. You need a dimmer marked three-way, and in the traditional design only one of the two switch locations holds the dimmer while the other keeps a standard three-way switch. The dimmer position becomes the master, and the other switch can turn the circuit on and off but not adjust brightness.</p>

<p>If you want to dim from both locations, there are two realistic paths. Some companion dimmer systems pair a main dimmer with a remote that connects through the existing wiring. Smart dimmers that use wireless remotes avoid the wiring question altogether, letting a battery-powered switch act as the second control. Before buying, confirm whether your three-way setup includes a neutral wire in the box, since many dimmers and nearly all smart ones need it for power.</p>

<p>Always turn off the breaker before swapping a switch, and note which wire goes to the common terminal on the old three-way switch. That terminal is the one wire that behaves differently from the others, and wiring it to the wrong spot is the classic reason a replacement three-way dimmer appears dead.</p>

<h2 id="smart-dimmers">Smart dimmers and smart bulbs</h2>

<p>A smart dimmer replaces the wall switch with one that has a wireless radio, letting you control brightness by app, voice or schedule. The bulbs stay ordinary dimmable LEDs. This keeps the wall switch functional for guests and avoids the problem of someone turning off a <a href="/guide/best-smart-light-bulbs">smart bulb</a> at the wall and breaking its connection. Smart dimmers often use trailing edge designs with LED-friendly minimums, but they typically need a neutral wire, which older homes may not provide at the switch box.</p>

<p>A smart bulb does the dimming internally and should never be placed on a wall dimmer. The dimmer chops the supply that the bulb needs to keep its radio alive, producing erratic behavior. If you choose smart bulbs, leave the switch fully on and replace the wall dimmer with a plain switch or a smart switch cover. Our explainer on <a href="/guide/smart-bulbs-for-living-room-explained">smart bulbs for the living room</a> covers that decision in more detail.</p>

<figure>
  <img src="/images/articles/dimmer-wiring-box.webp" alt="A wall switch box opened with wires exposed" />
  <figcaption>Check the switch box for a neutral wire, usually white and capped, before buying a smart dimmer.</figcaption>
</figure>

<h2 id="choosing">Choosing a dimmer for a living room</h2>

<p>Start with the bulbs you own or plan to buy and work backward. Add up total LED wattage on the circuit, check it against the dimmer minimum and maximum, and confirm the bulbs are labeled dimmable. For a room fully converted to LED, a trailing edge or LED-specific dimmer is the sound default. For a room with a mix of old halogen and new LED, a universal dimmer that supports both avoids guesswork.</p>

<p>Style matters less than electronics but is not irrelevant. A slide dimmer is easy to find in the dark and shows the level at a glance. A rotary dial gives finer control and a traditional look. A paddle with a side slider is the most forgiving when guests operate it. Whichever you pick, put the dimmer where the hand lands naturally on entering the room, and think about the whole lighting plan; the <a href="/guide/layered-lighting-living-room">layered lighting guide</a> shows which of your sources benefit from dimming and which should stay on plain switches.</p>

<p>Dimming also changes how bright a room needs to be. A fixture that looks glaring at full output often sits at 40 to 60 percent for evening use, so a dimmer effectively gives you a wider range from the same bulbs. To estimate how much output you need at full brightness, see how many lumens a living room needs in <a href="/guide/how-many-lumens-for-a-living-room">our lumens guide</a>.</p>

<h2 id="faq">Frequently asked questions</h2>

<h3>Can I use any LED bulb on a dimmer?</h3>
<p>No. The bulb must be labeled dimmable. A non-dimmable LED on a dimmer may flash, hum or fail early because its driver cannot interpret the chopped signal. Even among dimmable bulbs, quality varies, so check the manufacturer compatibility list when possible.</p>

<h3>Why does my dimmer have a minimum load?</h3>
<p>The internal switching component needs a small amount of current to stay stable through each half cycle. Incandescent bulbs drew plenty, but a few LEDs draw very little, so the dimmer can become unstable. An LED-rated dimmer lowers that threshold to about 10 watts or less.</p>

<h3>Is it worth paying more for a smart dimmer?</h3>
<p>If you want scenes, schedules or voice control without replacing every bulb, yes. The wall control still works for guests, and the bulbs stay inexpensive. The extra cost also buys better low-end behavior in many models, though you should confirm the neutral wire is present first.</p>

<h3>What if my old dimmer is a different brand from my new bulbs?</h3>
<p>Brand mismatch is normal, but compatibility is not guaranteed. Try one bulb before buying a full set, test the lowest and highest settings, and listen for buzz. If it misbehaves, a trailing edge or universal LED dimmer is the quickest fix.</p>

<h3>Do dimmers save energy with LEDs?</h3>
<p>Only a little. LEDs draw much less power than incandescent bulbs to begin with, and their consumption falls roughly in line with brightness, so dimming from full to half saves a modest fraction of a small number. The real benefit is atmosphere and a longer bulb life from running below full output.</p>

<h2 id="bottom-line">Bottom line</h2>

<p>Treat the dimmer and the bulb as a pair. Buy dimmable LED bulbs as one matching set, total their real wattage, and choose a trailing edge or LED-rated dimmer whose minimum load sits comfortably below that total. For a three-way circuit, buy a dimmer marked for it and decide in advance whether the second switch will stay a plain one.</p>

<p>If you are already living with flicker, do not replace the bulbs first. Check the total load, swap the old leading edge dimmer for an LED-rated one, and add a bulb if the fixture has a free socket. Those three steps resolve most cases without wiring changes beyond a single switch box.</p>`,
  imageCredits: [
    {"image":"accent-chair-desk-corner.webp","author":"JohnLEE Brothers","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:MC_%E6%BE%B3%E9%96%80_Macau_Cotai_%E4%B8%8A%E8%92%B2%E4%BA%AC_Grand_Lisboa_Palace_%E9%85%92%E5%BA%97_hotel_living_room_deck_n_armchair_November_2024_R12S.jpg"},
    {"image":"accent-chair-green-velvet.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:A_plush_green_velvet_armchair_occupies_the_corner_of_a_bright_living_room.jpg"},
    {"image":"accent-chair-hero.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Colorful_floral_armchair_beside_vintage_wooden_cabinet_in_cozy_living_room.jpg"},
    {"image":"anchor-built-in-bookcases-room.webp","author":"Carol M. Highsmith","license":"Public domain","source":"https://commons.wikimedia.org/wiki/File:Living_room_at_the_Biedenharn_Museum_%26_Gardens_in_Monroe_Louisiana.jpg"},
    {"image":"anchor-small-bookcase-hall.webp","author":"Steven Pavlov","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Wickers_Building_%E2%80%94_Living_Room_%E2%80%94_004.jpg"},
    {"image":"anchor-white-bookcase-wall.webp","author":"Egilus","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Bookshelf_for_free_exchange_in_Riga.jpg"},
    {"image":"arrange-living-room-hero.webp","author":"Kotivalo","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_with_1960s_objects.jpg"},
    {"image":"arrange-living-room-seating-group.webp","author":"Neoclassicism Enthusiast","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Neoclassic_sofa,_designed_by_ETRO_Home_Interiors_Design_Team,_circa_2024,_solid_fir_wood_and_multilayer_pine_wood,_polyurethane_foam,_upholstery,_44_x_235_x_97_cm,_sold_at_Etro_Boutique_(Via_Pontaccio_no._17),_Milan.jpg"},
    {"image":"arrange-living-room-sofa-wall.webp","author":"Adele Berenstein","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_area.jpg"},
    {"image":"artsofa-pictures-on-wall-room.webp","author":"Tudor Washington Collins","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Flowers_in_a_living_room_(AM_79398-1).jpg"},
    {"image":"artsofa-sofa-corner-mural.webp","author":"G�nter Seggeb�ing, Coesfeld","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:20170910_Haus_Stapel_-_Sofa_vor_historischer_Tapete,_Havixbeck_(01306).jpg"},
    {"image":"artsofa-sofa-mural-wall.webp","author":"G�nter Seggeb�ing, Coesfeld","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:20170910_Haus_Stapel_-_Sofa_vor_historischer_Tapete,_Havixbeck_(01285).jpg"},
    {"image":"blackoutcurtain-floor-length-pair.webp","author":"Ounfs Robmmy 238","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:TW_%E5%8F%B0%E6%B9%BE_Taipei_%E5%8F%B0%E5%8C%97_Hotel_Metropolitan_Premier_Taipei_%E9%85%92%E5%BA%97%E6%88%BF%E9%96%93_hotel_room_living_zone_n_window_curtain_March_2024_R12S_01.jpg"},
    {"image":"blackoutcurtain-olive-heavy-fabric.webp","author":"Easysayg","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Curtain_hanging_from_ready-made_curtain_rod_(--wiki68).jpg"},
    {"image":"blackoutcurtain-white-sheer-hotel.webp","author":"HuiDongXLW RMDa","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:HZ_%E6%83%A0%E5%B7%9E_Huizhou_%E6%83%A0%E6%9D%B1_Huidong_%E9%87%91%E6%B5%B7%E7%81%A3%E5%A4%A7%E9%81%93_Jinhaiwan_Blvd_%E8%8F%AF%E7%BE%8E%E9%81%94%E9%85%92%E5%AE%B6_Ramada_Hotel_room_window_white_curtain_living_room_November_2023_R12S.jpg"},
    {"image":"ceilingfan-five-blade-light.webp","author":"CommandProMC","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Modern_ceiling_fan.jpg"},
    {"image":"ceilingfan-pull-chain-light.webp","author":"Hans Olav Lien","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Ceiling_fan_with_lamp.jpg"},
    {"image":"clean-fabric-sofa-blanket.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Woman_arranging_colorful_blanket_on_sofa_in_cozy_living_room_during_daytime.jpg"},
    {"image":"clean-fabric-sofa-hero.webp","author":"Lear 21","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Home24sofa.jpg"},
    {"image":"clean-fabric-sofa-slipcover.webp","author":"Enric","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:004_Sof%C3%A0_amb_funda.jpg"},
    {"image":"clean-rug-fringe-pattern.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpet_Khachagorg.jpg"},
    {"image":"clean-rug-runner-hall.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpets_from_Shushi_Carpet_Museum.jpg"},
    {"image":"coffeetable-round-yellow-sofa.webp","author":"Vaibhavratnaparkhi","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Sofa_and_coffee_table_with_price_tags.jpg"},
    {"image":"coffeetable-tan-sofa-dark-table.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_living_room_setting_with_a_yellow_sofa_and_a_coffee_table_adorned_with_cups_and_a_flower_pot.jpg"},
    {"image":"coffeetable-two-wood-tables.webp","author":"Sophia Baboolal","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Coffee_tables_in_front_of_a_comfy_sofa_(Unsplash).jpg"},
    {"image":"color-temp-bright-bulb.webp","author":"Xzantiyamoloy","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Jivah_9-Watt_LED_Bulb.jpg"},
    {"image":"color-temp-gu10-spot.webp","author":"Dmitry G","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:7W_LED_light_bulb_(GU10).JPG"},
    {"image":"color-temp-hero.webp","author":"LoMit","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Lamp_with_a_lampshade_illuminated_by_sunlight.jpg"},
    {"image":"color603010-paint-swatches-wall.webp","author":"Chris Rycroft","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Chicago_in_2022_Multi-colored_paint_swatches_(52060873322).jpg"},
    {"image":"color603010-rainbow-swatch-range.webp","author":"Joyful spherical creature","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Rainbow_paint_swatches.jpg"},
    {"image":"color603010-swatch-cards-neutrals.webp","author":"Clean Wal-Mart","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Paint_swatches.jpg"},
    {"image":"cornertv-1960s-room-tv-window.webp","author":"Kotivalo","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_with_1960s_objects.jpg"},
    {"image":"cornertv-budapest-sofa-room.webp","author":"Justin Sch�ler","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Budapest_Apartment_(Unsplash).jpg"},
    {"image":"cornertv-white-room-console.webp","author":"Oliur Rahman","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Laptop_in_the_living_room_(Unsplash).jpg"},
    {"image":"curtainfabric-heavy-olive-folds.webp","author":"Easysayg","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Curtain_hanging_from_ready-made_curtain_rod_(--wiki68).jpg"},
    {"image":"curtainfabric-hotel-floor-length-pair.webp","author":"Ounfs Robmmy 238","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:TW_%E5%8F%B0%E6%B9%BE_Taipei_%E5%8F%B0%E5%8C%97_Hotel_Metropolitan_Premier_Taipei_%E9%85%92%E5%BA%97%E6%88%BF%E9%96%93_hotel_room_living_zone_n_window_curtain_March_2024_R12S_01.jpg"},
    {"image":"curtainfabric-white-light-filtering.webp","author":"HuiDongXLW RMDa","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:HZ_%E6%83%A0%E5%B7%9E_Huizhou_%E6%83%A0%E6%9D%B1_Huidong_%E9%87%91%E6%B5%B7%E7%81%A3%E5%A4%A7%E9%81%93_Jinhaiwan_Blvd_%E8%8F%AF%E7%BE%8E%E9%81%94%E9%85%92%E5%AE%B6_Ramada_Hotel_room_window_white_curtain_living_room_November_2023_R12S.jpg"},
    {"image":"curtains-hk-window-stacked-open.webp","author":"YSSKACH WFAMOACSH TUNGA","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:HK_ML_%E6%B8%AF%E5%B3%B6%E5%8D%8A%E5%B1%B1_Mid-levels_%E5%B9%B2%E5%BE%B7%E9%81%93_33_Conduct_Road_FV_SceneCliff_%E6%89%BF%E5%BE%B7%E5%B1%B1%E8%8E%8A_2-29D_%E5%AE%A2%E5%BB%B3_living_room_window_January_2016_DSC_08.jpg"},
    {"image":"curtains-hotel-living-zone-floor-length.webp","author":"Ounfs Robmmy 238","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:TW_%E5%8F%B0%E6%B9%BE_Taipei_%E5%8F%B0%E5%8C%97_Hotel_Metropolitan_Premier_Taipei_%E9%85%92%E5%BA%97%E6%88%BF%E9%96%93_hotel_room_living_zone_n_window_curtain_March_2024_R12S_01.jpg"},
    {"image":"cushion-fill-hero.webp","author":"Dalton Scavassa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Sof%C3%A1.jpg"},
    {"image":"cushion-fill-pillows-leather.webp","author":"Aaaatu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_on_a_leather_sofa.jpg"},
    {"image":"depth-grey-sofa-cushions.webp","author":"Dalton Scavassa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Sof%C3%A1.jpg"},
    {"image":"depth-grey-sofa-hero.webp","author":"Lear 21","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Home24sofa.jpg"},
    {"image":"depth-sectional-living-room.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_living_room_with_a_gray_sofa.jpg"},
    {"image":"dimmer-rotary-wall.webp","author":"Paolomarco","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Dimmer_Light_Switch.jpg"},
    {"image":"dimmer-slide-wall.webp","author":"BrokenSphere","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Electric_residential_lighting_dimmer_switch.JPG"},
    {"image":"dimmer-wiring-box.webp","author":"Kurtkaiser","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Light_switch_wiring.jpg"},
    {"image":"door-hotel-living-room.webp","author":"Adele Berenstein","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_area.jpg"},
    {"image":"door-orange-sofa-hero.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_living_room_setup_with_a_warm_sofa,_coffee_cup,_and_an_open_book_in_a_softly_lit_environment.jpg"},
    {"image":"echo-1960s-room-soft-furnishings.webp","author":"Kotivalo","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_with_1960s_objects.jpg"},
    {"image":"echo-fabric-acoustic-panels-wall.webp","author":"36N63","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Acoustic_Panels_Office_Ceiling.jpg"},
    {"image":"echo-panel-mineral-wool-core.webp","author":"JoraK","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Acoustic_panels_from_the_former_Radio_Tirana_villa.jpg"},
    {"image":"entcenter-low-stand-devices.webp","author":"William Hook","license":"CC BY-SA 2.0","source":"https://commons.wikimedia.org/wiki/File:Home_cinema_01.jpg"},
    {"image":"entcenter-old-tv-setup.webp","author":"William Hook","license":"CC BY-SA 2.0","source":"https://commons.wikimedia.org/wiki/File:Sony_TV_setup_in_2008.jpg"},
    {"image":"entcenter-wood-wall-unit-living-room.webp","author":"Casey Fleser","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:In_Context_(4522859217).jpg"},
    {"image":"fabric-green-velvet-hero.webp","author":"Neoclassicism Enthusiast","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Neoclassic_sofa,_designed_by_ETRO_Home_Interiors_Design_Team,_circa_2024,_solid_fir_wood_and_multilayer_pine_wood,_polyurethane_foam,_upholstery,_44_x_235_x_97_cm,_sold_at_Etro_Boutique_(Via_Pontaccio_no._17),_Milan.jpg"},
    {"image":"fabric-grey-sofa-cushions.webp","author":"Lear 21","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Home24sofa.jpg"},
    {"image":"fabric-sofa-blanket.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Woman_arranging_colorful_blanket_on_sofa_in_cozy_living_room_during_daytime.jpg"},
    {"image":"floatshelf-mixed-books-rows.webp","author":"Roman Eisele","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Part_of_a_bookshelf_with_mixed_books,_mostly_in_German_(1).jpg"},
    {"image":"floatshelf-steel-support.webp","author":"Fructibus","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Stainless_steel_shelf_support_2017_-_A.jpg"},
    {"image":"floatshelf-white-bookcase-wall.webp","author":"Egilus","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Bookshelf_for_free_exchange_in_Riga.jpg"},
    {"image":"floor-lamp-height-hero.webp","author":"Agbarto","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:2026.11.15_Torchiere._Height-adjustable_vintage_floor_lamp_with_red_textile_lampshade.jpg"},
    {"image":"floor-lamp-height-stained-glass.webp","author":"Louis Comfort Tiffany / Tiffany Studios","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Floor_Lamp_MET_DT8293.jpg"},
    {"image":"floor-lamp-height-white-reading-lamp.webp","author":"FASTILY","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Floor_lamp_1_2016-07-06.jpg"},
    {"image":"frame-black-leather-sofa.webp","author":"www.Pixel.la Free Stock Photos","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Couch-furniture-living-room-sofa_(24300293356).jpg"},
    {"image":"frame-green-velvet-sofa.webp","author":"Neoclassicism Enthusiast","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Neoclassic_sofa,_designed_by_ETRO_Home_Interiors_Design_Team,_circa_2024,_solid_fir_wood_and_multilayer_pine_wood,_polyurethane_foam,_upholstery,_44_x_235_x_97_cm,_sold_at_Etro_Boutique_(Via_Pontaccio_no._17),_Milan.jpg"},
    {"image":"frame-grey-sofa-hero.webp","author":"Dalton Scavassa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Sof%C3%A1.jpg"},
    {"image":"gallerywall-frames-bookcase-lamp.webp","author":"Personal Creations","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Photograph_wall_gallery_in_home_with_photo_frames_on_wall_a_bookcase_and_an_end_table_with_lamp_(16333989232).jpg"},
    {"image":"gallerywall-frames-floor-tape.webp","author":"Personal Creations","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Mapping_out_a_photograph_wall_gallery_with_photo_frames_on_floor_and_tape_to_measure_dimensions_(16147482500).jpg"},
    {"image":"gallerywall-frames-on-wall-home.webp","author":"Personal Creations","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Photograph_wall_gallery_in_home_with_photo_frames_on_wall_(16333093181).jpg"},
    {"image":"hang-light-hero.webp","author":"Martin Falbisoner","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Ceiling_light_fixture_in_Hofstatt_Mall,_Munich,_February_2017.jpg"},
    {"image":"hang-light-lamp-with-shade.webp","author":"LoMit","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Lamp_with_a_lampshade_illuminated_by_sunlight.jpg"},
    {"image":"hang-light-red-drum-lamp.webp","author":"Agbarto","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:2026.11.15_Mid-century_modern_red_floor_lamp.jpg"},
    {"image":"jute-sisal-combing-fibre.webp","author":"Uncredited for Keystone View Company","license":"Public domain","source":"https://commons.wikimedia.org/wiki/File:Combing_sisal_fibre,_Tekik_Plantation,_Acanceh,_Yucatan,_Mexico_1909_crop_showing_right_photo.jpg"},
    {"image":"jute-sisal-hero.webp","author":"B.navez","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:EuropaIsland_Sisal_02.JPG"},
    {"image":"jute-sisal-plantation.webp","author":"Forest &amp; Kim Starr","license":"CC BY 3.0","source":"https://commons.wikimedia.org/wiki/File:Starr_041223-1969_Agave_sisalana.jpg"},
    {"image":"knotted-rug-cut-pile-carpet.webp","author":"Daderot","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Prayer_rug,_Caucasus,_Karabagh,_or_Dagestan,_c._1700,_wool_-_Huntington_Museum_of_Art_-_DSC04822.JPG"},
    {"image":"knotted-rug-hero.webp","author":"Daderot","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Rug,_Western_Iran,_Feregahn-Sarouk,_1885-1915,_wool_-_Huntington_Museum_of_Art_-_DSC04866.JPG"},
    {"image":"knotted-rug-prayer-wool.webp","author":"Daderot","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Prayer_rug,_Turkey,_Bergama,_late_19th_century,_wool_-_Huntington_Museum_of_Art_-_DSC04879.JPG"},
    {"image":"lampshade-cream-base.webp","author":"LoMit","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Lamp_with_a_lampshade_illuminated_by_sunlight.jpg"},
    {"image":"lampshade-empire-lamp.webp","author":"J.Dncsn","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Lamp_2.JPG"},
    {"image":"lampshade-paper-rect-lamp.webp","author":"Zeitlupe","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:ORGEL_table_lamp.jpg"},
    {"image":"layer-rugs-armchairs.webp","author":"PattayaPatrol","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:DSC_8576_Cozy_elegantly_furnished_sitting_area_with_tufted_armchairs_warm_golden_tones_and_artistic_decor.jpg"},
    {"image":"layer-rugs-conversation-pit.webp","author":"Marsh Davis; Indiana Landmarks","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:John_E._and_Catherine_E._Christian_House,_1301_Woodland_Avenue_(West_Lafayette,_Ind.)_-_DPLA_-_560ae4f2870614f79d3744e8718e7613.jpg"},
    {"image":"layer-rugs-hero.webp","author":"BusterD","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Duxtad_cabin_first_floor_living_area.jpg"},
    {"image":"layered-light-hero.webp","author":"FASTILY","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Floor_lamp_1_2016-07-06.jpg"},
    {"image":"layered-light-red-shade-lamp.webp","author":"Agbarto","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:2026.11.15_Red_drum_shade_floor_lamp.jpg"},
    {"image":"layered-light-table-lamp.webp","author":"LoMit","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Lamp_with_a_lampshade_illuminated_by_sunlight.jpg"},
    {"image":"leather-care-black-sofa.webp","author":"www.Pixel.la Free Stock Photos","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Couch-furniture-living-room-sofa_(24300293356).jpg"},
    {"image":"leather-care-burgundy-set.webp","author":"Dominic's pics","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Burgundy_Leather_Sofa_Set,_Lower_Clapton_01.jpg"},
    {"image":"leather-care-hero.webp","author":"Thomas Quine","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Antique_leather_sofa_(38642034240).jpg"},
    {"image":"ledstrip-cove-fireplace.webp","author":"Andrey Gvrv","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Led_room_example_3.jpg"},
    {"image":"ledstrip-spool-driver.webp","author":"Dmitry G","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:How_to_wire_LED-strip.JPG"},
    {"image":"ledstrip-tv-back.webp","author":"Stilfehler","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:LED_strip_light_on_the_backside_of_a_TV.jpg"},
    {"image":"loveseat-sofa-armchair-room.webp","author":"Adele Berenstein","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_area.jpg"},
    {"image":"loveseat-sofa-hero.webp","author":"Aaaatu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_on_a_leather_sofa.jpg"},
    {"image":"loveseat-sofa-leather-pair.webp","author":"Dominic's pics","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Burgundy_Leather_Sofa_Set,_Lower_Clapton_01.jpg"},
    {"image":"lowlight-snake-plant-corner-pot.webp","author":"Enzo Rippa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Sansevieria_Trifasciata_.jpg"},
    {"image":"lowlight-snake-plant-window-table.webp","author":"Martin Olsson","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Snake_plant.jpg"},
    {"image":"lowlight-zz-plant-potted.webp","author":"Jamshid Nurkulov","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Zamioculcas_zamiifolia._Tashkent._01.jpg"},
    {"image":"lumens-bulb-hero.webp","author":"R. Henrik Nilsson","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:2010s_IKEA_3_5W_E14_2700K_LED_light_bulb_made_in_China.jpg"},
    {"image":"lumens-led-bulbs-group.webp","author":"Geoffrey.landis at English Wikipedia","license":"CC BY 3.0","source":"https://commons.wikimedia.org/wiki/File:LED_bulbs.jpg"},
    {"image":"measure-cabin-sofa.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_cabin_living_room_with_wooden_interior.jpg"},
    {"image":"measure-room-depth.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Stylish_living_room_features_a_comfortable_gray_sofa_and_wooden_paneling_under_a_high_ceiling.jpg"},
    {"image":"measure-sofa-hero.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_living_room_setting_with_a_yellow_sofa_and_a_coffee_table_adorned_with_cups_and_a_flower_pot.jpg"},
    {"image":"mirror-above-mantel-living-room.webp","author":"Tudor Washington Collins","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Flowers_in_a_living_room_(AM_79398-1).jpg"},
    {"image":"mirror-round-blue-wall-window.webp","author":"Ciara N� Riain","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Blue_walls_and_mirror_in_house_Den_Gamle_By_Old_Town_Museum_Aarhus_Denmark.jpg"},
    {"image":"mirror-round-over-wood-console.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Modern_wooden_vanity_with_round_mirror_in_minimalistic_interior_design.jpg"},
    {"image":"mixpatterns-armenian-patterned-pillows.webp","author":"Ararat Trvants","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_with_traditional_Armenian_patterns.jpg"},
    {"image":"mixpatterns-couch-pillows-set.webp","author":"Dawid Skalec","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_for_the_couch.JPG"},
    {"image":"mixpatterns-leather-sofa-pillows.webp","author":"Aaaatu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_on_a_leather_sofa.jpg"},
    {"image":"no-overhead-hero.webp","author":"Gotogo","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Table_lamp_Gladiolus.jpg"},
    {"image":"no-overhead-red-shade-lamp.webp","author":"Agbarto","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:2026.11.15_Mid-century_modern_red_floor_lamp.jpg"},
    {"image":"no-overhead-white-floor-lamp.webp","author":"FASTILY","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Floor_lamp_1_2016-07-06.jpg"},
    {"image":"nodrillcurtain-hk-window-open.webp","author":"YSSKACH WFAMOACSH TUNGA","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:HK_ML_%E6%B8%AF%E5%B3%B6%E5%8D%8A%E5%B1%B1_Mid-levels_%E5%B9%B2%E5%BE%B7%E9%81%93_33_Conduct_Road_FV_SceneCliff_%E6%89%BF%E5%BE%B7%E5%B1%B1%E8%8E%8A_2-29D_%E5%AE%A2%E5%BB%B3_living_room_window_January_2016_DSC_08.jpg"},
    {"image":"nodrillcurtain-olive-rail-folds.webp","author":"Easysayg","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Curtain_hanging_from_ready-made_curtain_rod_(--wiki68).jpg"},
    {"image":"nodrillcurtain-white-light-panel.webp","author":"HuiDongXLW RMDa","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:HZ_%E6%83%A0%E5%B7%9E_Huizhou_%E6%83%A0%E6%9D%B1_Huidong_%E9%87%91%E6%B5%B7%E7%81%A3%E5%A4%A7%E9%81%93_Jinhaiwan_Blvd_%E8%8F%AF%E7%BE%8E%E9%81%94%E9%85%92%E5%AE%B6_Ramada_Hotel_room_window_white_curtain_living_room_November_2023_R12S.jpg"},
    {"image":"open-plan-rug-armchairs.webp","author":"PattayaPatrol","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:DSC_8576_Cozy_elegantly_furnished_sitting_area_with_tufted_armchairs_warm_golden_tones_and_artistic_decor.jpg"},
    {"image":"open-plan-rug-hero.webp","author":"NPS Photo","license":"Public domain","source":"https://commons.wikimedia.org/wiki/File:The_living_room_inside_the_birthplace_home_features_a_fireplace,_table_and_chairs,_family_photos,_area_rug_and_floor_console_(7f9f6e78-a966-4608-b9d0-d600db0b5f25).jpg"},
    {"image":"open-plan-rug-sunken-living.webp","author":"Marsh Davis; Indiana Landmarks","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:John_E._and_Catherine_E._Christian_House,_1301_Woodland_Avenue_(West_Lafayette,_Ind.)_-_DPLA_-_560ae4f2870614f79d3744e8718e7613.jpg"},
    {"image":"ottoman-coffee-table-pair.webp","author":"Sophia Baboolal","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Coffee_tables_in_front_of_a_comfy_sofa_(Unsplash).jpg"},
    {"image":"ottoman-leather-round-pair.webp","author":"Olugold","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Ottoman_stools.jpg"},
    {"image":"ottoman-round-stool-top.webp","author":"Olugold","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Ottoman_stool.jpg"},
    {"image":"paintsheen-open-paint-cans.webp","author":"United Soybean Board","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Open_Soy_Paint_Cans_(10481728754).jpg"},
    {"image":"paintsheen-paint-can-brush.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:A_paint_can_and_brush_rest_on_the_concrete.jpg"},
    {"image":"paintsheen-swatch-cards-range.webp","author":"Chris Rycroft","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Chicago_in_2022_Multi-colored_paint_swatches_(52062151114).jpg"},
    {"image":"pets-sofa-kitten-cushions.webp","author":"Feliciano Guimar�es from Guimar�es, Portugal","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Kitten_among_sofa_cushions_(2010).jpg"},
    {"image":"pets-sofa-slipcover.webp","author":"Enric","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:004_Sof%C3%A0_amb_funda.jpg"},
    {"image":"pillows-decorative-couch-set.webp","author":"Dawid Skalec","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_for_the_couch.JPG"},
    {"image":"pillows-leather-sofa-group.webp","author":"Aaaatu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_on_a_leather_sofa.jpg"},
    {"image":"pillows-wooden-sofa-red-cushions.webp","author":"Zohasheikh","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Wooden_Sofa_with_Red_Cushions.jpg"},
    {"image":"readinglamp-adjustable-torchiere.webp","author":"Agbarto","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:2026.11.15_Torchiere._Height-adjustable_vintage_floor_lamp_with_red_textile_lampshade.jpg"},
    {"image":"readinglamp-armchair-corner-lamp.webp","author":"Kotivalo","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Reading_corner_with_armchair_and_lamp.jpg"},
    {"image":"readinglamp-cozy-sunlit-corner.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_reading_corner_with_vintage_decor_and_modern_lighting_in_a_sunlit_living_space.jpg"},
    {"image":"recessed-gimbal-trim.webp","author":"Stilfehler","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Light_fixtures_in_a_home_improvement_store_in_NY_12.jpg"},
    {"image":"recessed-housing-display.webp","author":"Stilfehler","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Light_fixtures_in_a_home_improvement_store_in_NY_14.jpg"},
    {"image":"recessed-led-can-trim.webp","author":"Stilfehler","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Light_fixtures_in_a_home_improvement_store_in_NY_16.jpg"},
    {"image":"recliner-buying-armchair-room.webp","author":"Virginia State Parks staff","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:WE_PRR_Living_Room_chairs_(8311324928).jpg"},
    {"image":"recliner-buying-hero.webp","author":"Laura Stoinski","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Recliner.jpg"},
    {"image":"recliner-buying-leather-sofa.webp","author":"Aaaatu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Decorative_pillows_on_a_leather_sofa.jpg"},
    {"image":"rug-curl-fringe-rug.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpet_Khachagorg.jpg"},
    {"image":"rug-curl-hero.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpet_Tsakhkagorg.jpg"},
    {"image":"rug-curl-runner-patterns.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpet_Honeybee.jpg"},
    {"image":"rug-dents-hero.webp","author":"ProjectManhattan","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Black_carpet.jpg"},
    {"image":"rug-dents-wool-medallion.webp","author":"Daderot","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Rug,_Western_Iran,_Feregahn-Sarouk,_1885-1915,_wool_-_Huntington_Museum_of_Art_-_DSC04866.JPG"},
    {"image":"rug-on-carpet-armchairs.webp","author":"PattayaPatrol","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:DSC_8576_Cozy_elegantly_furnished_sitting_area_with_tufted_armchairs_warm_golden_tones_and_artistic_decor.jpg"},
    {"image":"rug-on-carpet-flat-weave.webp","author":"Mervat","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Hand_Loomed_Wool_Rugs_in_Jordan_2.jpg"},
    {"image":"rug-on-carpet-hero.webp","author":"NPS Photo","license":"Public domain","source":"https://commons.wikimedia.org/wiki/File:The_living_room_inside_the_birthplace_home_features_a_fireplace,_table_and_chairs,_family_photos,_area_rug_and_floor_console_(7f9f6e78-a966-4608-b9d0-d600db0b5f25).jpg"},
    {"image":"rug-pad-dense-carpet.webp","author":"ProjectManhattan","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Black_carpet.jpg"},
    {"image":"rug-pad-hero.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpet_Khachagorg.jpg"},
    {"image":"rug-pile-flatweave-stack.webp","author":"Mervat","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Hand_Loomed_Wool_Rugs_in_Jordan.jpg"},
    {"image":"rug-pile-sarouk-wool.webp","author":"Daderot","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Rug,_Western_Iran,_Feregahn-Sarouk,_1885-1915,_wool_-_Huntington_Museum_of_Art_-_DSC04866.JPG"},
    {"image":"rug-shedding-pile-closeup.webp","author":"ProjectManhattan","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Black_carpet.jpg"},
    {"image":"rug-shedding-wool-rugs.webp","author":"Mervat","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Hand_Loomed_Wool_Rugs_in_Jordan.jpg"},
    {"image":"rug-size-armchairs-on-rug.webp","author":"PattayaPatrol","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:DSC_8576_Cozy_elegantly_furnished_sitting_area_with_tufted_armchairs_warm_golden_tones_and_artistic_decor.jpg"},
    {"image":"rug-size-conversation-area.webp","author":"Marsh Davis; Indiana Landmarks","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:John_E._and_Catherine_E._Christian_House,_1301_Woodland_Avenue_(West_Lafayette,_Ind.)_-_DPLA_-_560ae4f2870614f79d3744e8718e7613.jpg"},
    {"image":"rug-size-hero.webp","author":"NPS Photo","license":"Public domain","source":"https://commons.wikimedia.org/wiki/File:The_living_room_inside_the_birthplace_home_features_a_fireplace,_table_and_chairs,_family_photos,_area_rug_and_floor_console_(7f9f6e78-a966-4608-b9d0-d600db0b5f25).jpg"},
    {"image":"runner-size-hero.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpet_Starfall.jpg"},
    {"image":"runner-size-red-runner.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpet_Honeybee.jpg"},
    {"image":"runner-size-three-runners.webp","author":"Sununa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Carpets_from_Shushi_Carpet_Museum.jpg"},
    {"image":"sag-cushions-hero.webp","author":"Durova","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Filet_crochet_sofa_blanket.jpg"},
    {"image":"sag-cushions-slipcover.webp","author":"Enric","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:004_Sof%C3%A0_amb_funda.jpg"},
    {"image":"sag-cushions-sofa-deck.webp","author":"Dalton Scavassa","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Sof%C3%A1_2.jpg"},
    {"image":"sconce-above-tufted-chairs.webp","author":"Jedodo756","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Elegant_Interior_with_Stylish_Wall_Sconce_Lighting.jpg"},
    {"image":"sconce-brass-opal-shade.webp","author":"unknown (see Commons page)","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Applique_murale_-_20150802_11h32_(10668).jpg"},
    {"image":"sconce-wall-lamp-side-table.webp","author":"Atilla Taskiran","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Living_room_furniture_(Unsplash).jpg"},
    {"image":"sectional-dark-hero.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_living_room_with_a_gray_sofa.jpg"},
    {"image":"sectional-room-arrangement.webp","author":"Kotivalo","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_with_1960s_objects.jpg"},
    {"image":"sectional-white-corner.webp","author":"GardenKings","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:HK_Ka_Wah_Centre_showflat_%E6%B7%B1%E7%81%A39_Marinella_T6-A_living_room_Sofa_Oct-2011.jpg"},
    {"image":"shelfsag-mixed-books-shelf.webp","author":"Roman Eisele","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Part_of_a_bookshelf_with_mixed_books,_mostly_in_German_(1).jpg"},
    {"image":"shelfsag-packed-bookshelf.webp","author":"Csferrie","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:A_bookshelf_full_of_Chris_Ferrie%27s_books.jpg"},
    {"image":"shelfsag-wood-shelf-rows.webp","author":"PeaceSeekers","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Islamic_books_shelf.jpg"},
    {"image":"sidetable-cozy-sofa-room.webp","author":"Breather","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Cozy_interior_with_a_sofa_(Unsplash).jpg"},
    {"image":"sidetable-kentwood-sofa.webp","author":"Kari Shea","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Sofa_Side_Table_Kentwood_(Unsplash).jpg"},
    {"image":"sidetable-round-wall-lamp.webp","author":"Atilla Taskiran","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Living_room_furniture_(Unsplash).jpg"},
    {"image":"sleeper-sofa-bed-made-up.webp","author":"Maniago","license":"Public domain","source":"https://commons.wikimedia.org/wiki/File:Slaapbank2.JPG"},
    {"image":"sleeper-sofa-open-hero.webp","author":"N509FZ","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Friheten_sofa_bed_at_IKEA_Beijing_Siyuanqiao_Store,_bed_status_(20210418125907).jpg"},
    {"image":"sleeper-sofa-sofa-mode.webp","author":"N509FZ","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Friheten_sofa_bed_at_IKEA_Beijing_Siyuanqiao_Store,_sofa_status_(20210418125747).jpg"},
    {"image":"small-room-slim-arm-sofa.webp","author":"Lear 21","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Home24sofa.jpg"},
    {"image":"small-room-sofa-hero.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_living_room_setup_with_a_warm_sofa,_coffee_cup,_and_an_open_book_in_a_softly_lit_environment.jpg"},
    {"image":"small-room-two-seat-layout.webp","author":"Adele Berenstein","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Living_room_area.jpg"},
    {"image":"smallbigger-finland-studio-bright.webp","author":"Aaaatu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Studio_apartment_in_Finland.jpg"},
    {"image":"smallbigger-hk-curtains-open-window.webp","author":"YSSKACH WFAMOACSH TUNGA","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:HK_ML_%E6%B8%AF%E5%B3%B6%E5%8D%8A%E5%B1%B1_Mid-levels_%E5%B9%B2%E5%BE%B7%E9%81%93_33_Conduct_Road_FV_SceneCliff_%E6%89%BF%E5%BE%B7%E5%B1%B1%E8%8E%8A_2-29D_%E5%AE%A2%E5%BB%B3_living_room_window_January_2016_DSC_08.jpg"},
    {"image":"smallbigger-white-room-console.webp","author":"Oliur Rahman","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Laptop_in_the_living_room_(Unsplash).jpg"},
    {"image":"smallstorage-finland-studio-room.webp","author":"Aaaatu","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Studio_apartment_in_Finland.jpg"},
    {"image":"smallstorage-leather-sofa-shelving.webp","author":"Sabri Tuzcu","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Take_a_seat_(Unsplash).jpg"},
    {"image":"smallstorage-wall-shelves-books.webp","author":"Roger W","license":"CC BY-SA 2.0","source":"https://commons.wikimedia.org/wiki/File:Brooklyn_Heights_-_Bookshelves_at_My_Apartment_(4605536002).jpg"},
    {"image":"smart-bulbs-bulb-in-hand.webp","author":"Xzantiyamoloy","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Jivah_9-Watt_LED_Bulb.jpg"},
    {"image":"smart-bulbs-led-internals.webp","author":"Loadmaster, Bech","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:LED-E27-Light-Bulb-1134-cropped.jpg"},
    {"image":"soundbar-below-lg-tv.webp","author":"Dinkun Chen","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:LG_IPS_LCD_4K_TV_%26_SAMSUNG_SOUNDBAR_HW-J250.jpg"},
    {"image":"soundbar-philips-front-grille.webp","author":"Philips Communications","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Philips_Soundbar_with_Ambisound_HTS9140_front.jpg"},
    {"image":"soundbar-samsung-single-bar.webp","author":"Dinkun Chen","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:SAMSUNG_SOUNDBAR_HW-J250.jpg"},
    {"image":"stylebooks-packed-shelf-wall.webp","author":"Csferrie","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:A_bookshelf_full_of_Chris_Ferrie%27s_books.jpg"},
    {"image":"stylebooks-philosophers-shelf.webp","author":"Roman Eisele","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Part_of_a_bookshelf_containing_books_by_ancient_philosophers_(1.1).jpg"},
    {"image":"stylebooks-wall-shelves-bottles-books.webp","author":"Roger W","license":"CC BY-SA 2.0","source":"https://commons.wikimedia.org/wiki/File:Brooklyn_Heights_-_Bookshelves_at_My_Apartment_(4605536002).jpg"},
    {"image":"styletable-book-stack-candle.webp","author":"Gabbybratcher","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Coffee_Table_book_stack.jpg"},
    {"image":"styletable-two-tables-mugs.webp","author":"Sophia Baboolal","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Coffee_tables_in_front_of_a_comfy_sofa_(Unsplash).jpg"},
    {"image":"styletable-yellow-sofa-cups-flowerpot.webp","author":"Shixart1985","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cozy_living_room_setting_with_a_yellow_sofa_and_a_coffee_table_adorned_with_cups_and_a_flower_pot.jpg"},
    {"image":"surround-home-theater-tv-seating.webp","author":"NPat318","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Home_theater_3.jpg"},
    {"image":"surround-rear-view-seats.webp","author":"NPat318","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Home_theater_4_rear_view.jpg"},
    {"image":"surround-sectional-media-room.webp","author":"Derek Jensen (Tysto)","license":"Public domain","source":"https://commons.wikimedia.org/wiki/File:Home-theater-tysto2.jpg"},
    {"image":"table-lamp-size-antique-shade.webp","author":"Amitbalani","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Wooden_Antique_Table_Lamp.jpg"},
    {"image":"table-lamp-size-hero.webp","author":"Tess Mattew","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:2026.06.05_USSR_Milk_Glass_Table_Lamp_01.jpg"},
    {"image":"table-lamp-size-measured.webp","author":"Tess Mattew","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:2026.06.05_USSR_Milk_Glass_Table_Lamp_04.jpg"},
    {"image":"throwblanket-blue-throw-kitten.webp","author":"TudorTulok","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Tabby_Kitten_on_Blue_Throw.jpg"},
    {"image":"throwblanket-striped-couch-cat.webp","author":"Roman Eisele","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Europ%C3%A4isch-Kurzhaar-Kater_Mika_2024-08-30_auf_Couch.jpg"},
    {"image":"throwblanket-yellow-blue-couch.webp","author":"Roman Eisele","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Europ%C3%A4isch-Kurzhaar-Kater_Mika_2022-05-13_auf_Couch.jpg"},
    {"image":"tvheight-flat-panel-wall.webp","author":"BrokenSphere","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Wall-mounted_36_inch_flat_panel_Panasonic_TV.JPG"},
    {"image":"tvheight-plasma-wall-room.webp","author":"Pkepneriv","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Plasma_Flat_Panel_Mounted_on_a_wall.jpg"},
    {"image":"tvheight-white-living-room.webp","author":"Oliur Rahman","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Laptop_in_the_living_room_(Unsplash).jpg"},
    {"image":"tvmount-articulating-arm.webp","author":"Ben Scholzen","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Monitor_arm_stand_(1).jpg"},
    {"image":"tvmount-vesa-adapter-plate.webp","author":"Tony Webster","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Apple_Pro_Display_XDR_VESA_Mount_Adapter.jpg"},
    {"image":"tvmount-wall-panel-room.webp","author":"Pkepneriv","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Plasma_Flat_Panel_Mounted_on_a_wall.jpg"},
    {"image":"tvsize-dark-room-big-screen.webp","author":"Christian Collins","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Home_Theater_(6330635908).jpg"},
    {"image":"tvsize-media-room-screen.webp","author":"NPat318","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:Home_theater_1.jpg"},
    {"image":"tvsize-tv-on-stand.webp","author":"PhotoPicker13","license":"CC BY-SA 4.0","source":"https://commons.wikimedia.org/wiki/File:OnePlus_TV_U1S.jpg"},
    {"image":"tvstand-low-stand-devices.webp","author":"William Hook","license":"CC BY-SA 2.0","source":"https://commons.wikimedia.org/wiki/File:Home_cinema_01.jpg"},
    {"image":"tvstand-wall-unit-living-room.webp","author":"Casey Fleser","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:In_Context_(4522859217).jpg"},
    {"image":"tvwires-cable-box-wires.webp","author":"Tony Webster","license":"CC BY 2.0","source":"https://commons.wikimedia.org/wiki/File:Cable_TV_Box_(49045039997).jpg"},
    {"image":"tvwires-hdmi-connectors.webp","author":"Kreuzschnabel","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Connectors_LAN_RCA_HDMI_SCART.jpg"},
    {"image":"tvwires-wall-mounted-panel.webp","author":"BrokenSphere","license":"CC BY-SA 3.0","source":"https://commons.wikimedia.org/wiki/File:Wall-mounted_36_inch_flat_panel_Panasonic_TV.JPG"},
    {"image":"washable-rugs-flatweave-stack.webp","author":"Mervat","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Hand_Loomed_Wool_Rugs_in_Jordan_2.jpg"},
    {"image":"washable-rugs-hero.webp","author":"Mervat","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Hand_Loomed_Wool_Rugs_in_Jordan.jpg"},
    {"image":"washable-rugs-loomed-stripes.webp","author":"Gcarrillog","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Aurora_Baz%C3%A1n_Oaxacan_Wool_Rugs.jpg"},
    {"image":"wool-poly-hero.webp","author":"Mervat","license":"CC BY 4.0","source":"https://commons.wikimedia.org/wiki/File:Hand_Loomed_Wool_Rugs_in_Jordan_2.jpg"},
    {"image":"wool-poly-oaxacan-wool.webp","author":"Gcarrillog","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Aurora_Baz%C3%A1n_Oaxacan_Wool_Rugs.jpg"},
    {"image":"wool-poly-prayer-rug.webp","author":"Daderot","license":"CC0","source":"https://commons.wikimedia.org/wiki/File:Prayer_rug,_Caucasus,_Karabagh,_or_Dagestan,_c._1700,_wool_-_Huntington_Museum_of_Art_-_DSC04822.JPG"},
  ],
  shopGuides: [],
  relatedGuides: [
    {"title":"Layered lighting in a living room","href":"/guide/layered-lighting-living-room"},
    {"title":"Smart bulbs for the living room explained","href":"/guide/smart-bulbs-for-living-room-explained"},
    {"title":"How many lumens a living room needs","href":"/guide/how-many-lumens-for-a-living-room"},
  ],
};

export default guide;
export const kind = guide.kind;
export const guideSlug = guide.guideSlug;
export const guideTitle = guide.guideTitle;
export const metaTitle = guide.metaTitle;
export const metaDescription = guide.metaDescription;
export const heroImage = guide.heroImage;
export const lastUpdated = guide.lastUpdated;
export const readTime = guide.readTime;
export const quickAnswer = guide.quickAnswer;
export const html = guide.html;
export const imageCredits = guide.imageCredits;
export const shopGuides = guide.shopGuides;
export const relatedGuides = guide.relatedGuides;
