const items = [
  {
    image: "./assets/images/illustration-grow-together.svg",
    title: "Grow Together",
    subtitle:
      "Generate meaningful discussion with your audience and build strong, loyal community. Think of the insightful conversations you miss out on with a feedback form",
  },
  {
    image: "./assets/images/illustration-flowing-conversation.svg",
    title: "Flowing Conversation",
    subtitle:
      "You wouldn't paginate a conversation in real life, so why do it online?  Our thread have just-in-time loading for a more natural flow.",
  },
  {
    image: "./assets/images/illustration-your-users.svg",
    title: "Your Users",
    subtitle:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed into your app, Your user can start chatting immediately.",
  },
];

const features = () => {
  const container = document.getElementById("feature__container");
  const elements = [];
  for (let i = 0; i < items.length; i++) {
    const className = i === 1 ? "feature__card__reverse" : "feature__card"
    const element = `
        <article class="${className}">
            <header class="feature__card__left">
                <h1>${items[i].title}</h1>
                <p>${items[i].subtitle}</p>
            </header>
            <picture class="feature__card__right">
                <img src=${items[i].image} alt="" />
            </picture>
        </article>
    `;
    elements.push(element);
  }

  // console.log(elements)

  container.innerHTML = elements.join("\n");
};

features();
