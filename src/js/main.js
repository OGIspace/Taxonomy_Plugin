document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".posts-by-date");

    wrappers.forEach((wrapper) => {
        const modal = wrapper.querySelector("[data-post-modal]");
        if (!modal) {
            return;
        }

        const titleEl = modal.querySelector("[data-post-modal-title]");
        const thumbnailEl = modal.querySelector("[data-post-modal-thumbnail]");
        const excerptEl = modal.querySelector("[data-post-modal-excerpt]");
        const dateEl = modal.querySelector("[data-post-modal-date]");
        const slugEl = modal.querySelector("[data-post-modal-slug]");
        const linkEl = modal.querySelector("[data-post-modal-link]");
        const closeEls = modal.querySelectorAll("[data-post-modal-close]");

        const openModal = (card) => {
            const title = card.dataset.title || "";
            const thumbnail = card.dataset.thumbnail || "";
            const excerpt = card.dataset.excerpt || "";
            const date = card.dataset.date || "";
            const slug = card.dataset.slug || "";
            const link = card.dataset.link || "#";

            titleEl.textContent = title;
            excerptEl.textContent = excerpt;
            dateEl.textContent = `Date: ${date}`;
            slugEl.textContent = `Slug: ${slug}`;
            linkEl.href = link;

            if (thumbnail) {
                thumbnailEl.src = thumbnail;
                thumbnailEl.alt = title;
                thumbnailEl.hidden = false;
            } else {
                thumbnailEl.hidden = true;
                thumbnailEl.removeAttribute("src");
                thumbnailEl.alt = "";
            }

            modal.hidden = false;
            document.body.classList.add("post-modal-open");
        };

        const closeModal = () => {
            modal.hidden = true;
            document.body.classList.remove("post-modal-open");
        };

        wrapper.querySelectorAll(".post-card").forEach((card) => {
            card.addEventListener("click", () => openModal(card));
        });

        closeEls.forEach((el) => {
            el.addEventListener("click", closeModal);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !modal.hidden) {
                closeModal();
            }
        });
    });
});

const test = () => {
    console.log("Test");
    const wrappers = document.querySelectorAll(".posts-by-date");
    wrappers.forEach((wrapper) => {
        const modal = wrapper.querySelector("[data-post-modal]");
        if (!modal) {
            return;
        }
    });
}

test();