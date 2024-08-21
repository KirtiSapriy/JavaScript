
document.getElementById("head").innerHTML = `<h1>I'm <span class="name">Kirti</span></h1>
<h5>Full-stack Developar</h5>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eveniet incidunt accusantium
recusandae aliquam itaque facilis, pariatur voluptatum cumque voluptatibus vitae et eos
similique quis aliquid ducimus facere veniam commodi nesciunt exercitationem qui earum libero
voluptatem suscipit. Laborum fugiat suscipit dolores id, voluptatibus qui! Itaque doloremque
voluptatem officiis veritatis at molestiae ut nesciunt blanditiis atque reprehenderit sapiente,
aut nemo nulla odit necessitatibus. Neque veniam, quod minus asperiores deleniti delectus
        </p>`;


document.getElementById("intro").innerHTML = `


<ul class="row ">
  <li class="fa-solid fa-phone mt-3"><a style="text-decoration:none; font-size:14px; margin-left:20px">1234567890</a></li>
  

  <li class="fa-solid fa-envelope mt-3 " style=""><a style="text-decoration:none; font-size:14px; margin-left:20px; text-transform: lowercase;">sapriyak@gmail.com </a></li>
  

  <li class="fa-solid fa-location-dot mt-3"</li>
  <dd></dd>

</ul>





</table>
<span class="mt-5">HTMl</span>
<div class=" mt-2 progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 90%;background-color: rgb(251, 51, 117)"></div>
</div>
<span class="mt-5">CSS</span>
<div class=" mt-2 progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 70%;background-color: rgb(251, 51, 117)"></div>
</div>
<span class="mt-5">JQ</span>
<div class=" mt-2 progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 80%;background-color: rgb(251, 51, 117)"></div>
</div>
<span class="mt-5">Bootstrap</span>
<div class=" mt-2 progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 90%;background-color: rgb(251, 51, 117)"></div>
</div>


 `;
document.getElementById("gr").innerHTML = `

`;

document.getElementById("skil").innerHTML = `
<h1>My Skill</h1>

`;
document.getElementById("time").innerHTML = `
<svg display="none">
	<symbol id="arrow">
		<polyline points="7 10,12 15,17 10" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
	</symbol>
</svg>
<h1>A Brief History of Unix Time</h1>
<div id="timeline" class="timeline">
	<div class="btn-group">
		<button class="btn" type="button" data-action="expand">Expand All</button>
		<button class="btn" type="button" data-action="collapse">Collapse All</button>
	</div>
	<div class="timeline__item">
		<div class="timeline__item-header">
			<button class="timeline__arrow" type="button" id="item1" aria-labelledby="item1-name" aria-expanded="false" aria-controls="item1-ctrld" aria-haspopup="true" data-item="1">
				<svg class="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
					<use href="#arrow" />
				</svg>
			</button>
			<span class="timeline__dot"></span>
			<span id="item1-name" class="timeline__meta">
				<time class="timeline__date" datetime="1970-01-01">January 1, 1970</time><br>
				<strong class="timeline__title">Unix Epoch</strong>
			</span>
		</div>
		<div class="timeline__item-body" id="item1-ctrld" role="region" aria-labelledby="item1" aria-hidden="true">
			<div class="timeline__item-body-content">
				<p class="timeline__item-p">This is the day the Unix clock began (or <time datetime="1969-12-31">December 31, 1969</time> if you live behind UTC 😉).</p>
			</div>
		</div>
	</div>
	<div class="timeline__item">
		<div class="timeline__item-header">
			<button class="timeline__arrow" type="button" id="item2" aria-labelledby="item2-name" aria-expanded="false" aria-controls="item2-ctrld" aria-haspopup="true" data-item="2">
				<svg class="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
					<use href="#arrow" />
				</svg>
			</button>
			<span class="timeline__dot"></span>
			<span id="item2-name" class="timeline__meta">
				<time class="timeline__date" datetime="1973-10-17">October 17, 1973</time><br>
				<strong class="timeline__title">Digits Within ISO 8601 Format</strong>
			</span>
		</div>
		<div class="timeline__item-body" id="item2-ctrld" role="region" aria-labelledby="item2" aria-hidden="true">
			<div class="timeline__item-body-content">
				<p class="timeline__item-p">At 6:36:57 PM UTC, the date in ISO 8601 format (1973-10-17) within the time digits (119731017) appeared for the first time.</p>
			</div>
		</div>
	</div>
	<div class="timeline__item">
		<div class="timeline__item-header">
			<button class="timeline__arrow" type="button" id="item3" aria-labelledby="item3-name" aria-expanded="false" aria-controls="item3-ctrld" aria-haspopup="true" data-item="3">
				<svg class="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
					<use href="#arrow" />
				</svg>
			</button>
			<span class="timeline__dot"></span>
			<span id="item3-name" class="timeline__meta">
				<time class="timeline__date" datetime="2001-09-09">September 9, 2001</time><br>
				<strong class="timeline__title">1 Billion Seconds</strong>
			</span>
		</div>
		<div class="timeline__item-body" id="item3-ctrld" role="region" aria-labelledby="item3" aria-hidden="true">
			<div class="timeline__item-body-content">
				<p class="timeline__item-p">Unix time reached 1,000,000,000 seconds at 1:46:40 AM UTC. The Danish UNIX User Group celebrated this in Copenhagen, Denmark.</p>
			</div>
		</div>
	</div>
	<div class="timeline__item">
		<div class="timeline__item-header">
			<button class="timeline__arrow" type="button" id="item4" aria-labelledby="item4-name" aria-expanded="false" aria-controls="item4-ctrld" aria-haspopup="true" data-item="4">
				<svg class="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
					<use href="#arrow" />
				</svg>
			</button>
			<span class="timeline__dot"></span>
			<span id="item4-name" class="timeline__meta">
				<time class="timeline__date" datetime="2009-02-13">February 13, 2009</time><br>
				<strong class="timeline__title">1,234,567,890 Seconds</strong>
			</span>
		</div>
		<div class="timeline__item-body" id="item4-ctrld" role="region" aria-labelledby="item4" aria-hidden="true">
			<div class="timeline__item-body-content">
				<p class="timeline__item-p">At 11:31:30 PM UTC, the digits of the time were 1234567890. This was celebrated worldwide, and even Google had a <a href="https://www.google.com/logos/unix1234567890.gif" target="_blank" rel="noopener">doodle</a> for it.</p>
			</div>
		</div>
	</div>
	<div class="timeline__item">
		<div class="timeline__item-header">
			<button class="timeline__arrow" type="button" id="item5" aria-labelledby="item5-name" aria-expanded="false" aria-controls="item5-ctrld" aria-haspopup="true" data-item="5">
				<svg class="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
					<use href="#arrow" />
				</svg>
			</button>
			<span class="timeline__dot"></span>
			<span id="item5-name" class="timeline__meta">
				<time class="timeline__date" datetime="2033-05-18">May 18, 2033</time><br>
				<strong class="timeline__title">2 Billion Seconds</strong>
			</span>
		</div>
		<div class="timeline__item-body" id="item5-ctrld" role="region" aria-labelledby="item5" aria-hidden="true">
			<div class="timeline__item-body-content">
				<p class="timeline__item-p">Unix time will reach 2,000,000,000 seconds at 3:33:20 AM UTC.</p>
			</div>
		</div>
	</div>
	<div class="timeline__item">
		<div class="timeline__item-header">
			<button class="timeline__arrow" type="button" id="item6" aria-labelledby="item6-name" aria-expanded="false" aria-controls="item6-ctrld" aria-haspopup="true" data-item="6">
				<svg class="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
					<use href="#arrow" />
				</svg>
			</button>
			<span class="timeline__dot"></span>
			<span id="item6-name" class="timeline__meta">
				<time class="timeline__date" datetime="2038-01-19">January 19, 2038</time><br>
				<strong class="timeline__title">Unix Epochalypse</strong>
			</span>
		</div>
		<div class="timeline__item-body" id="item6-ctrld" role="region" aria-labelledby="item6" aria-hidden="true">
			<div class="timeline__item-body-content">
				<p class="timeline__item-p">Also known as the year 2038 problem, clocks running on a 32-bit signed integer will flip from 3:14:08 AM UTC on this day to 8:45:52 PM UTC on December 13, 1901. Therefore, values only from -2,147,483,648 to 2,147,483,647 for the second are supported.</p>
			</div>
		</div>
	</div>
</div>
`

window.addEventListener("DOMContentLoaded",() => {
	const ctl = new CollapsibleTimeline("#timeline");
});

class CollapsibleTimeline {
	constructor(el) {
		this.el = document.querySelector(el);

		this.init();
	}
	init() {
		this.el?.addEventListener("click",this.itemAction.bind(this));
	}
	animateItemAction(button,ctrld,contentHeight,shouldCollapse) {
		const expandedClass = "timeline__item-body--expanded";
		const animOptions = {
			duration: 300,
			easing: "cubic-bezier(0.65,0,0.35,1)"
		};

		if (shouldCollapse) {
			button.ariaExpanded = "false";
			ctrld.ariaHidden = "true";
			ctrld.classList.remove(expandedClass);
			animOptions.duration *= 2;
			this.animation = ctrld.animate([
				{ height: `${contentHeight}px` },
				{ height: `${contentHeight}px` },
				{ height: "0px" }
			],animOptions);
		} else {
			button.ariaExpanded = "true";
			ctrld.ariaHidden = "false";
			ctrld.classList.add(expandedClass);
			this.animation = ctrld.animate([
				{ height: "0px" },
				{ height: `${contentHeight}px` }
			],animOptions);
		}
	}
	itemAction(e) {
		const { target } = e;
		const action = target?.getAttribute("data-action");
		const item = target?.getAttribute("data-item");

		if (action) {
			const targetExpanded = action === "expand" ? "false" : "true";
			const buttons = Array.from(this.el?.querySelectorAll(`[aria-expanded="${targetExpanded}"]`));
			const wasExpanded = action === "collapse";

			for (let button of buttons) {
				const buttonID = button.getAttribute("data-item");
				const ctrld = this.el?.querySelector(`#item${buttonID}-ctrld`);
				const contentHeight = ctrld.firstElementChild?.offsetHeight;

				this.animateItemAction(button,ctrld,contentHeight,wasExpanded);
			}

		} else if (item) {
			const button = this.el?.querySelector(`[data-item="${item}"]`);
			const expanded = button?.getAttribute("aria-expanded");

			if (!expanded) return;

			const wasExpanded = expanded === "true";
			const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
			const contentHeight = ctrld.firstElementChild?.offsetHeight;

			this.animateItemAction(button,ctrld,contentHeight,wasExpanded);
		}
	}
}

