document.addEventListener("DOMContentLoaded", () => {
  // --- Global DOM Elements (Existing Project) ---
  const copyToast = document.getElementById("copyToast");
  const copyToastMessage = document.getElementById("copyToastMessage");

  // Message Box elements for success/error messages (Existing Project)
  const messageBox = document.getElementById("messageBox");
  const messageText = document.getElementById("messageText");
  const closeMessageBox = document.getElementById("closeMessageBox");
  const overlay = document.getElementById("overlay");

  // --- Modal Specific Elements (New for Payment Form) ---
  const donationModal = document.getElementById("donation-modal");
  const closeDonationModalButton = document.getElementById("close-modal");
  const paymentFormContainer = document.getElementById("paymentFormContainer"); // Main form content within modal

  // Confirmation Screens within the modal
  const genericPaymentConfirmationScreen = document.getElementById(
    "genericPaymentConfirmationScreen"
  );
  const wingMoneyConfirmationScreen = document.getElementById(
    "wingMoneyConfirmationScreen"
  );

  // --- Payment Form Elements (New from Immersive) ---
  const donationAmountInput = document.getElementById("donationAmount");
  const donationPurposeSelect = document.getElementById(
    "donationPurposeSelect"
  );
  const customDonationPurposeDiv = document.getElementById(
    "customDonationPurposeDiv"
  );
  const customDonationPurposeInput = document.getElementById(
    "customDonationPurposeInput"
  );
  const finalDonationPurposeInput = document.getElementById(
    "finalDonationPurpose"
  ); // Hidden input

  const creditCardSection = document.getElementById("creditCardSection");
  const abaPaySection = document.getElementById("abaPaySection");
  const wingMoneySection = document.getElementById("wingMoneySection");
  const bankAccountSection = document.getElementById("bankAccountSection");

  const creditCardTab = document.getElementById("creditCardTab");
  const abaPayTab = document.getElementById("abaPayTab");
  const wingMoneyTab = document.getElementById("wingMoneyTab");
  const bankTransferTab = document.getElementById("bankTransferTab");

  const cardNameInput = document.getElementById("cardName");
  const cardNumberInput = document.getElementById("cardNumber");
  const expMonthSelect = document.getElementById("expMonth");
  const expYearSelect = document.getElementById("expYear");
  const securityCodeInput = document.getElementById("securityCode");

  const chooseBankSelect = document.getElementById("chooseBank");
  const bankNameInput = document.getElementById("bankName");
  const accountHolderNameInput = document.getElementById("accountHolderName");
  const accountNumberInput = document.getElementById("accountNumber");
  const sortCodeInput = document.getElementById("sortCode");
  const bankTransferConfirmationImageInput = document.getElementById(
    "bankTransferConfirmationImage"
  );
  const bankTransferConfirmationImagePreview = document.getElementById(
    "bankTransferConfirmationImagePreview"
  );

  // New DOM elements for displaying bank transfer details in generic confirmation screen
  const confirmedBankName = document.getElementById("confirmedBankName");
  const confirmedAccountHolderName = document.getElementById(
    "confirmedAccountHolderName"
  );
  const confirmedAccountNumber = document.getElementById(
    "confirmedAccountNumber"
  );
  const confirmedSortCode = document.getElementById("confirmedSortCode");

  // --- Existing Project Logic (retained) ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMobileMenuButton = document.getElementById("close-mobile-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mainNavbar = document.getElementById("main-navbar");
  const heroDonateButton = document.getElementById("hero-donate-button");
  const mobileDonateButton = document.getElementById("mobile-donate-button");
  const contactForm = document.getElementById("contact-form");
  const contactMessageFeedback = document.getElementById(
    "contact-message-feedback"
  );
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterFeedback = document.getElementById("newsletter-feedback");
  const backToTopButton = document.getElementById("back-to-top");
  const currentYearSpan = document.getElementById("current-year");
  const hiddenSections = document.querySelectorAll(".hidden-section"); // Re-query after HTML update
  const faqToggles = document.querySelectorAll(".faq-toggle");
  const ctaDonateButton = document.getElementById("cta-donate-button");

  // Function to open mobile menu
  const openMobileMenu = () => {
    mobileMenu.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  };

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", openMobileMenu);
  }
  if (closeMobileMenuButton) {
    closeMobileMenuButton.addEventListener("click", closeMobileMenu);
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  const handleScroll = () => {
    if (mainNavbar) {
      if (window.scrollY > 50) {
        mainNavbar.classList.add("navbar-scrolled");
      } else {
        mainNavbar.classList.remove("navbar-scrolled");
      }
    }
    if (backToTopButton) {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    }
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  const donationProjects = [
    {
      id: "medical-care",
      title: "មូលនិធិមន្ទីរពេទ្យគន្ធបុប្ផា",
      description:
        "មូលនិធិមន្ទីរពេទ្យគន្ធបុប្ផា គឺជាមូលនិធិជាតិផ្លូវការដែលរៃអង្គាសថវិកាដើម្បីទ្រទ្រង់ការផ្ដល់សេវាព្យាបាលដោយឥតគិតថ្លៃជូនកុមារ និងស្ត្រីមានផ្ទៃពោះនៅមន្ទីរពេទ្យគន្ធបុប្ផា។",
      currentAmount: 12500,
      goalAmount: 20000,
      image: "/img/Kunthabopha.png",
      fallbackImage:
        "https://placehold.co/400x300/A7F3D0/047857?text=Medical+Care",
    },
    {
      id: "education",
      title: "មូលនិធិកងទ័ពជួរមុខ",
      description:
        "មូលនិធិកងទ័ពជួរមុខ គាំទ្រនិងជួយកងទ័ពការពារជាតិយើង។ រាល់ការបរិច្ចាគរបស់អ្នកនឹងលើកទឹកចិត្តវីរៈយុទ្ធជន។ ",
      currentAmount: 8500,
      goalAmount: 15000,
      image: "/img/military.jpg",
      fallbackImage:
        "https://placehold.co/400x300/93C5FD/1D4ED8?text=Education",
    },
    {
      id: "community-development",
      title: "មូលនិធិមន្ទីរពេទ្យកុមារអង្គរ",
      description:
        "មូលនិធិមន្ទីរពេទ្យកុមារអង្គរ គាំទ្រនិងលើកកម្ពស់សេវាសុខភាពដល់កុមារនៅមន្ទីរពេទ្យកុមារជាតិ។ ការបរិច្ចាគរបស់អ្នកជួយសុខភាពកុមារកម្ពុជា។",
      currentAmount: 18000,
      goalAmount: 25000,
      image: "/img/KomarAngkor.jpg",
      fallbackImage:
        "https://placehold.co/400x300/FDBA74/C2410C?text=Community+Dev",
    },
    {
      id: "animal-welfare",
      title: "មូលនិធិតាសុីក្លូ",
      description:
        "មូលនិធិតាស៊ីក្លូ ជួយគាំទ្រជីវភាពអ្នកធាក់ស៊ីក្លូក្រីក្រនៅកម្ពុជា។​ ការបរិច្ចាគរបស់អ្នកអាចនឹងជួយសម្រាលបន្ទុកពួកគាត់បានខ្លះ។",
      currentAmount: 4200,
      goalAmount: 7000,
      image: "/img/cyclo.jpg", // Assuming this is a valid image path
      fallbackImage:
        "https://placehold.co/400x300/D8B4FE/7E22CE?text=Animal+Welfare",
    },
    {
      id: "clean-water",
      title: "មូលនិធិសម្រាប់សិស្ស​ក្រីក្រ",
      description:
        "មូលនិធិសម្រាប់សិស្សក្រីក្រ ជួយឧបត្ថម្ភការសិក្សារបស់សិស្សានុសិស្សដែលមានជីវភាពខ្វះខាត ផ្ដល់ឱកាសឱ្យពួកគេទទួលបានការអប់រំ និងកសាងអនាគតដ៏ភ្លឺស្វាង។",
      currentAmount: 9800,
      goalAmount: 12000,
      image: "/img/AMT.jpg", // Assuming this is a valid image path
      fallbackImage:
        "https://placehold.co/400x300/FECACA/EF4444?text=Clean+Water",
    },
    {
      id: "disaster-relief",
      title: "មូលនិធិកុមារកំព្រា",
      description:
        "ជាមូលនិធិដែលផ្ដល់ជំនួយ និងការគាំទ្រដល់កុមារកំព្រា រួមមានការផ្គត់ផ្គង់ចំណីអាហារ សម្លៀកបំពាក់ ការអប់រំ និងទីជម្រកសមរម្យ។",
      currentAmount: 25000,
      goalAmount: 30000,
      image: "/img/MekCher.jpg",
      fallbackImage:
        "https://placehold.co/400x300/A8A29E/44403C?text=Disaster+Relief",
    },
  ];

  const donationCardsContainer = document.getElementById(
    "donation-cards-container"
  );

  const renderDonationCards = () => {
    if (!donationCardsContainer) return;

    donationCardsContainer.innerHTML = ""; // Clear existing cards
    donationProjects.forEach((project) => {
      const progress = (project.currentAmount / project.goalAmount) * 100;
      const card = `
                <div class="bg-emerald-50 rounded-2xl shadow-lg border border-emerald-100 p-6 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <img src="${
                      project.image
                    }" onerror="this.onerror=null;this.src='${
        project.fallbackImage
      }';" alt="${
        project.title
      } project image" class="w-full h-48 object-cover rounded-xl mb-6 shadow-md">
                    <h3 class="text-2xl font-bold text-gray-800 mb-3 font-bayon">${
                      project.title
                    }</h3>
                    <p class="text-gray-700 text-base mb-4 flex-grow">${
                      project.description
                    }</p>
                    <div class="mb-4">
                        <div class="flex justify-between mb-1 text-sm font-medium text-gray-600">
                            <span>បានរៃអង្គាស: $${project.currentAmount.toLocaleString()}</span>
                            <span>គោលដៅ: $${project.goalAmount.toLocaleString()}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-green-600 h-2.5 rounded-full" style="width: ${Math.min(
                              100,
                              progress
                            )}%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-1">${progress.toFixed(
                          2
                        )}% រួចរាល់</p>
                    </div>
                    <button data-project-id="${
                      project.id
                    }" class="donate-card-button px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center text-base font-semibold w-full">
                        បរិច្ចាគឥឡូវនេះ
                        
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            `;
      donationCardsContainer.innerHTML += card;
    });

    document.querySelectorAll(".donate-card-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const projectId = event.currentTarget.dataset.projectId;
        openDonationModal(projectId); // Pass the project ID
      });
    });
  };

  renderDonationCards();

  // Function to populate the donation purpose select dropdown
  const populateDonationPurposeSelect = () => {
    if (donationPurposeSelect) {
      // Clear existing options, except the default "Select purpose"
      while (donationPurposeSelect.options.length > 1) {
        donationPurposeSelect.remove(1);
      }

      // Add options from donationProjects array
      donationProjects.forEach((project) => {
        const option = document.createElement("option");
        option.value = project.title;
        option.textContent = project.title;
        donationPurposeSelect.appendChild(option);
      });

      // Add the "Other" option manually if it's not already in the projects
      const otherOptionExists = Array.from(donationPurposeSelect.options).some(
        (option) => option.value === "Other"
      );
      if (!otherOptionExists) {
        const otherOption = document.createElement("option");
        otherOption.value = "Other";
        otherOption.textContent = "ផ្សេងៗ (សូមបញ្ជាក់ខាងក្រោម)";
        donationPurposeSelect.appendChild(otherOption);
      }
    }
  };

  populateDonationPurposeSelect(); // Call this function on DOMContentLoaded

  // Function to open the donation modal, optionally pre-selecting a cause
  const openDonationModal = (preselectedCauseId = "") => {
    if (donationModal) {
      // Reset form state before opening
      resetForm();
      // Pre-select donation purpose if a project ID is provided
      if (preselectedCauseId) {
        // Find the project title corresponding to the ID
        const project = donationProjects.find(
          (p) => p.id === preselectedCauseId
        );
        if (project) {
          // Attempt to find the option by text content or value
          let foundOption = false;
          for (let i = 0; i < donationPurposeSelect.options.length; i++) {
            if (
              donationPurposeSelect.options[i].value === project.title ||
              donationPurposeSelect.options[i].textContent === project.title
            ) {
              donationPurposeSelect.value =
                donationPurposeSelect.options[i].value;
              finalDonationPurposeInput.value =
                donationPurposeSelect.options[i].value; // Update hidden field
              foundOption = true;
              break;
            }
          }
          // If project title is not a direct option, maybe set as "Other" and pre-fill custom input
          if (!foundOption && project.title) {
            donationPurposeSelect.value = "Other";
            customDonationPurposeDiv.classList.remove("hidden");
            customDonationPurposeInput.value = project.title;
            finalDonationPurposeInput.value = project.title; // Update hidden field
          }
        }
      }

      donationModal.classList.remove("hidden");
      donationModal.classList.add("modal-show");
      document.body.classList.add("overflow-hidden");
    }
  };

  // Function to close the donation modal
  const closeDonationModal = () => {
    if (donationModal) {
      donationModal.classList.remove("modal-show");
      donationModal.classList.add("modal-hide");
      setTimeout(() => {
        donationModal.classList.add("hidden");
        donationModal.classList.remove("modal-hide");
        document.body.classList.remove("overflow-hidden");
        // Reset the form state when modal is closed
        resetForm();
      }, 300);
    }
  };

  [heroDonateButton, mobileDonateButton, ctaDonateButton].forEach((button) => {
    if (button) {
      button.addEventListener("click", () => openDonationModal());
    }
  });

  if (closeDonationModalButton) {
    closeDonationModalButton.addEventListener("click", closeDonationModal);
  }

  if (donationModal) {
    donationModal.addEventListener("click", (e) => {
      if (e.target === donationModal) {
        closeDonationModal();
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
      const contactNameInput = document.getElementById("contact-name");
      const contactEmailInput = document.getElementById("contact-email");
      const contactSubjectInput = document.getElementById("contact-subject");
      const contactMessageInput = document.getElementById("contact-message");

      const nameError = document.getElementById("name-error");
      const emailError = document.getElementById("email-error");
      const subjectError = document.getElementById("subject-error");
      const messageError = document.getElementById("message-error");

      // Reset errors
      if (nameError) nameError.classList.add("hidden");
      if (emailError) emailError.classList.add("hidden");
      if (subjectError) subjectError.classList.add("hidden");
      if (messageError) messageError.classList.add("hidden");

      if (contactNameInput && contactNameInput.value.trim() === "") {
        if (nameError) nameError.classList.remove("hidden");
        isValid = false;
      }
      if (
        contactEmailInput &&
        (contactEmailInput.value.trim() === "" ||
          !contactEmailInput.value.includes("@"))
      ) {
        if (emailError) emailError.classList.remove("hidden");
        isValid = false;
      }
      if (contactSubjectInput && contactSubjectInput.value.trim() === "") {
        if (subjectError) subjectError.classList.remove("hidden");
        isValid = false;
      }
      if (contactMessageInput && contactMessageInput.value.trim() === "") {
        if (messageError) messageError.classList.remove("hidden");
        isValid = false;
      }

      if (isValid) {
        console.log("Contact form submitted:", {
          name: contactNameInput.value,
          email: contactEmailInput.value,
          subject: contactSubjectInput.value,
          message: contactMessageInput.value,
        });
        if (contactMessageFeedback)
          contactMessageFeedback.classList.remove("hidden");
        contactForm.reset();
        setTimeout(() => {
          if (contactMessageFeedback)
            contactMessageFeedback.classList.add("hidden");
        }, 3000);
      }
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (
        emailInput &&
        emailInput.value.trim() !== "" &&
        emailInput.value.includes("@")
      ) {
        console.log("Newsletter subscription:", emailInput.value);
        if (newsletterFeedback) newsletterFeedback.classList.remove("hidden");
        emailInput.value = "";
        setTimeout(() => {
          if (newsletterFeedback) newsletterFeedback.classList.add("hidden");
        }, 3000);
      }
    });
  }

  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
        entry.target.classList.remove("hidden-section");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".hidden-section").forEach((section) => {
    observer.observe(section);
  });

  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("aria-controls");
      const targetContent = document.getElementById(targetId);
      const icon = toggle.querySelector(".faq-icon");

      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      faqToggles.forEach((otherToggle) => {
        if (
          otherToggle !== toggle &&
          otherToggle.getAttribute("aria-expanded") === "true"
        ) {
          const otherTargetId = otherToggle.getAttribute("aria-controls");
          const otherTargetContent = document.getElementById(otherTargetId);
          const otherIcon = otherToggle.querySelector(".faq-icon");

          if (otherTargetContent) otherTargetContent.classList.add("hidden");
          otherToggle.setAttribute("aria-expanded", "false");
          if (otherIcon) otherIcon.classList.remove("rotated");
        }
      });

      if (isExpanded) {
        if (targetContent) targetContent.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
        if (icon) icon.classList.remove("rotated");
      } else {
        if (targetContent) targetContent.classList.remove("hidden");
        toggle.setAttribute("aria-expanded", "true");
        if (icon) icon.classList.add("rotated");
      }
    });
  });

  // --- Payment Form Logic (Integrated from Immersive) ---

  /**
   * Shows the selected payment input section and updates the active tab styling.
   * Hides all other input sections and confirmation screens.
   * @param {string} sectionId - The ID of the section to show.
   */
  window.showPaymentSection = function (sectionId) {
    // Made global to be accessible from onclick
    // All payment input sections
    const inputSections = [
      creditCardSection,
      abaPaySection,
      wingMoneySection,
      bankAccountSection,
    ];
    // All tab buttons
    const tabs = [creditCardTab, abaPayTab, wingMoneyTab, bankTransferTab];

    // Hide all input sections and deactivate all tabs first
    inputSections.forEach(
      (section) => section && section.classList.add("hidden")
    );
    tabs.forEach((tab) => tab && tab.classList.remove("active"));

    // Hide all confirmation screens when switching tabs
    genericPaymentConfirmationScreen.classList.add("hidden");
    wingMoneyConfirmationScreen.classList.add("hidden");
    paymentFormContainer.classList.remove("hidden"); // Ensure the main form is visible

    // Show the selected section and activate its tab
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.remove("hidden");
    }

    let activeTab;
    if (sectionId === "creditCardSection") {
      activeTab = creditCardTab;
    } else if (sectionId === "abaPaySection") {
      activeTab = abaPayTab;
    } else if (sectionId === "wingMoneySection") {
      activeTab = wingMoneyTab;
    } else if (sectionId === "bankAccountSection") {
      activeTab = bankTransferTab;
    }

    if (activeTab) {
      activeTab.classList.add("active");
    }
  };

  // Event listener for the "Choose Bank" dropdown (only applies to Bank Transfer)
  if (chooseBankSelect) {
    chooseBankSelect.addEventListener("change", function () {
      const selectedBank = this.value;
      if (bankNameInput) {
        // Check if bankNameInput exists before accessing
        if (selectedBank && selectedBank !== "Other") {
          bankNameInput.value = selectedBank;
          bankNameInput.readOnly = true; // Make it read-only if a specific bank is chosen
          bankNameInput.classList.add("bg-gray-100"); // Add a subtle background for read-only
        } else {
          bankNameInput.value = ""; // Clear if "Select a Bank" or "Other" is chosen
          bankNameInput.readOnly = false; // Make it editable
          bankNameInput.classList.remove("bg-gray-100"); // Remove background
          bankNameInput.focus(); // Focus for user to type
        }
      }
    });
  }

  // Event listener for "Donate for?" dropdown to toggle custom input
  if (donationPurposeSelect) {
    donationPurposeSelect.addEventListener("change", function () {
      if (
        customDonationPurposeDiv &&
        customDonationPurposeInput &&
        finalDonationPurposeInput
      ) {
        const donationPurposeSelectValue = this.value;

        if (donationPurposeSelectValue === "Other") {
          customDonationPurposeDiv.classList.remove("hidden");
          customDonationPurposeInput.focus();
          finalDonationPurposeInput.value = ""; // Clear hidden field until custom is entered
        } else {
          customDonationPurposeDiv.classList.add("hidden");
          customDonationPurposeInput.value = ""; // Clear custom input
          finalDonationPurposeInput.value = donationPurposeSelectValue; // Set hidden field to selected value
        }
      }
    });
  }

  // Event listener for custom donation purpose input
  if (customDonationPurposeInput) {
    customDonationPurposeInput.addEventListener("input", function () {
      if (finalDonationPurposeInput) {
        finalDonationPurposeInput.value = this.value;
      }
    });
  }

  // Event listener for bank transfer confirmation image input to display preview
  if (bankTransferConfirmationImageInput) {
    bankTransferConfirmationImageInput.addEventListener(
      "change",
      function (event) {
        const [file] = event.target.files;
        if (bankTransferConfirmationImagePreview) {
          if (file) {
            bankTransferConfirmationImagePreview.src =
              URL.createObjectURL(file);
            bankTransferConfirmationImagePreview.classList.remove("hidden");
          } else {
            bankTransferConfirmationImagePreview.classList.add("hidden");
            bankTransferConfirmationImagePreview.src = "#";
          }
        }
      }
    );
  }

  /**
   * Simulates a payment processing and displays the appropriate confirmation screen.
   * This function is triggered by the "Continue" button inside the modal.
   */
  window.processPayment = function () {
    // Made global to be accessible from onclick
    const donationAmount = donationAmountInput ? donationAmountInput.value : "";
    const donationPurpose = finalDonationPurposeInput
      ? finalDonationPurposeInput.value
      : "";

    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      displayMessage("សូមបញ្ចូលចំនួនទឹកប្រាក់បរិច្ចាគត្រឹមត្រូវ។");
      return;
    }

    if (!donationPurpose.trim()) {
      displayMessage("សូមជ្រើសរើស ឬបញ្ចូលគោលបំណងបរិច្ចាគ។");
      return;
    }

    let activeSectionId = "";
    const inputSections = [
      "creditCardSection",
      "abaPaySection",
      "wingMoneySection",
      "bankAccountSection",
    ];
    for (const id of inputSections) {
      if (
        document.getElementById(id) &&
        !document.getElementById(id).classList.contains("hidden")
      ) {
        activeSectionId = id;
        break;
      }
    }

    // Perform specific validation based on active section
    if (activeSectionId === "creditCardSection") {
      if (
        !cardNameInput.value ||
        !cardNumberInput.value ||
        !expMonthSelect.value ||
        !expYearSelect.value ||
        !securityCodeInput.value
      ) {
        displayMessage("សូមបំពេញព័ត៌មានលម្អិតកាតឥណទានទាំងអស់។");
        return;
      }
    } else if (activeSectionId === "bankAccountSection") {
      if (
        !chooseBankSelect.value ||
        !bankNameInput.value ||
        !accountHolderNameInput.value ||
        !accountNumberInput.value
      ) {
        displayMessage("សូមបំពេញព័ត៌មានលម្អិតធនាគារដែលត្រូវការទាំងអស់។");
        return;
      }
    }
    // ABA Pay and Wing Money sections are placeholders, no specific input validation needed for this demo

    // Hide the form container
    paymentFormContainer.classList.add("hidden");

    // Reset visibility of bank details spans before showing confirmation
    confirmedBankName.classList.add("hidden");
    confirmedAccountHolderName.classList.add("hidden");
    confirmedAccountNumber.classList.add("hidden");
    confirmedSortCode.classList.add("hidden");

    // Determine which confirmation screen to show
    if (activeSectionId === "wingMoneySection") {
      // Show Wing Money specific confirmation
      wingMoneyConfirmationScreen.classList.remove("hidden");
      document.getElementById(
        "confirmedAmountWingMoney"
      ).innerText = `$${parseFloat(donationAmount).toFixed(2)}`;
      document.getElementById(
        "donationPurposeConfirmationWingMoney"
      ).innerText = `គោលបំណង៖ ${donationPurpose}`;
    } else {
      // Show generic confirmation for Credit Card, ABA Pay, Bank Transfer
      genericPaymentConfirmationScreen.classList.remove("hidden");
      document.getElementById(
        "confirmedAmountGeneric"
      ).innerText = `$${parseFloat(donationAmount).toFixed(2)}`;

      let paymentMethodName = "";
      if (activeSectionId === "creditCardSection") {
        paymentMethodName = "កាតឥណទាន (Visa, MasterCard)";
      } else if (activeSectionId === "abaPaySection") {
        paymentMethodName = "ABA Pay";
      } else if (activeSectionId === "bankAccountSection") {
        paymentMethodName = "ការផ្ទេរប្រាក់តាមធនាគារ";
        // Populate bank transfer details
        if (bankNameInput.value) {
          confirmedBankName.innerText = `ធនាគារ: ${bankNameInput.value}`;
          confirmedBankName.classList.remove("hidden");
        }
        if (accountHolderNameInput.value) {
          confirmedAccountHolderName.innerText = `ឈ្មោះម្ចាស់គណនី: ${accountHolderNameInput.value}`;
          confirmedAccountHolderName.classList.remove("hidden");
        }
        if (accountNumberInput.value) {
          confirmedAccountNumber.innerText = `លេខគណនី: ${accountNumberInput.value}`;
          confirmedAccountNumber.classList.remove("hidden");
        }
        if (sortCodeInput.value) {
          confirmedSortCode.innerText = `លេខកូដធនាគារ: ${sortCodeInput.value}`;
          confirmedSortCode.classList.remove("hidden");
        }
      }
      document.getElementById(
        "paymentMethodConfirmationGeneric"
      ).innerText = `អ្នកបានជ្រើសរើសវិធីសាស្រ្តទូទាត់តាម ${paymentMethodName} ។`;
      document.getElementById(
        "donationPurposeConfirmationGeneric"
      ).innerText = `គោលបំណង៖ ${donationPurpose}`;
    }
    // In a real application, you would send this data to your backend
    console.log("Donation Data:", {
      amount: donationAmount,
      purpose: donationPurpose,
      method: activeSectionId,
      // Add other form data as needed
    });
  };

  /**
   * Resets the form and hides confirmation screens to allow another donation.
   * This function is triggered by the "Fantastic!" button on confirmation screens.
   */
  window.resetForm = function () {
    // Made global to be accessible from onclick
    // Hide all confirmation screens
    genericPaymentConfirmationScreen.classList.add("hidden");
    wingMoneyConfirmationScreen.classList.add("hidden");

    // Hide and clear bank details spans
    if (confirmedBankName) confirmedBankName.classList.add("hidden");
    if (confirmedAccountHolderName)
      confirmedAccountHolderName.classList.add("hidden");
    if (confirmedAccountNumber) confirmedAccountNumber.classList.add("hidden");
    if (confirmedSortCode) confirmedSortCode.classList.add("hidden");

    if (confirmedBankName) confirmedBankName.innerText = "";
    if (confirmedAccountHolderName) confirmedAccountHolderName.innerText = "";
    if (confirmedAccountNumber) confirmedAccountNumber.innerText = "";
    if (confirmedSortCode) confirmedSortCode.innerText = "";

    // Show the main form container
    paymentFormContainer.classList.remove("hidden");

    // Reset form fields
    if (donationAmountInput) donationAmountInput.value = "";
    if (donationPurposeSelect) donationPurposeSelect.value = "";
    if (customDonationPurposeInput) customDonationPurposeInput.value = "";
    if (customDonationPurposeDiv)
      customDonationPurposeDiv.classList.add("hidden");
    if (finalDonationPurposeInput) finalDonationPurposeInput.value = "";

    if (cardNameInput) cardNameInput.value = "";
    if (cardNumberInput) cardNumberInput.value = "";
    if (expMonthSelect) expMonthSelect.value = "";
    if (expYearSelect) expYearSelect.value = "";
    if (securityCodeInput) securityCodeInput.value = "";

    if (chooseBankSelect) chooseBankSelect.value = "";
    if (bankNameInput) {
      bankNameInput.value = "";
      bankNameInput.readOnly = false;
      bankNameInput.classList.remove("bg-gray-100");
    }
    if (accountHolderNameInput) accountHolderNameInput.value = "";
    if (accountNumberInput) accountNumberInput.value = "";
    if (sortCodeInput) sortCodeInput.value = "";

    if (bankTransferConfirmationImageInput)
      bankTransferConfirmationImageInput.value = "";
    if (bankTransferConfirmationImagePreview) {
      bankTransferConfirmationImagePreview.classList.add("hidden");
      bankTransferConfirmationImagePreview.src = "#";
    }

    // Ensure the default tab is shown (Credit Card)
    showPaymentSection("abaPaySection"); // Changed default to ABA Pay
  };

  /**
   * Displays a custom message box for validation/feedback.
   * Uses the existing messageBox and overlay elements.
   * @param {string} message - The message to display.
   */
  function displayMessage(message) {
    if (messageText && messageBox && overlay) {
      messageText.innerHTML = message;
      messageBox.classList.add("show");
      overlay.classList.add("show");
      document.body.classList.add("overflow-hidden"); // Prevent body scroll
    } else {
      alert(message); // Fallback to alert if elements not found
    }
  }

  /**
   * Hides the custom message box.
   */
  function hideMessageBox() {
    if (messageBox && overlay) {
      messageBox.classList.remove("show");
      overlay.classList.remove("show");
      document.body.classList.remove("overflow-hidden"); // Restore body scroll
    }
  }

  // Event listener for the close button on the message box
  if (closeMessageBox) {
    closeMessageBox.addEventListener("click", hideMessageBox);
  }
  // Close message box if clicking outside (on the overlay)
  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        hideMessageBox();
      }
    });
  }

  // --- Initialization on Load ---
  // Ensure the main form is visible and default tab is shown when the modal is opened
  // and when the DOM is ready.
  if (paymentFormContainer) {
    // Ensure paymentFormContainer exists before trying to access it
    // Initialize the active tab on page load (even if modal is hidden)
    showPaymentSection("abaPaySection"); // Changed default to ABA Pay
  }

  // Load preferences and initialize display on page load
  // Original donation form local storage logic removed as new form handles state within modal.
});
