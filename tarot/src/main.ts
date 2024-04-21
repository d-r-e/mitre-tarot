async function loadImages() {
  const grid = document.getElementById('image-grid') as HTMLElement;

  const response = {
    "00-Reconnaissance-The Magician.webp": {
      "title": "The Magician",
      "id": "TA0001",
      "tactic": "Reconnaissance",
      "description": "Reconnaissance involves actively collecting preliminary data to better understand the target and tailor subsequent operations. This stage lays the groundwork for more focused and effective attacks."
    },
    "04-Resource Development-Wheel of Fortune.webp": {
      "title": "Wheel of Fortune",
      "id": "TA0040",
      "tactic": "Resource Development",
      "description": "Resource Development encompasses the procurement and management of resources, such as establishing command and control infrastructure and creating malicious tools, critical for staging and executing operations."
    },
    "05-Initial Access-The Chariot.webp": {
      "title": "The Chariot",
      "id": "TA0005",
      "tactic": "Initial Access",
      "description": "Initial Access marks the stage where attackers first gain a foothold within a network, often through social engineering, exploiting public-facing applications, or system vulnerabilities."
    },
    "06-Execution-The Emperor.webp": {
      "title": "The Emperor",
      "id": "TA0006",
      "tactic": "Execution",
      "description": "Execution involves the running of malicious code and commands once access is obtained. This tactic leverages scripts, service execution, or exploitation of system functionality to achieve its goals."
    },
    "07-Persistence-The Hierophant.webp": {
      "title": "The Hierophant",
      "id": "TA0007",
      "tactic": "Persistence",
      "description": "Persistence ensures continued control over an access point even after system restarts, upgrades, or other disruptions. Common methods include creating or modifying scripts, services, or registry keys."
    },
    "08-Privilege Escalation-The Tower.webp": {
      "title": "The Tower",
      "id": "TA0008",
      "tactic": "Privilege Escalation",
      "description": "Privilege Escalation involves exploiting system flaws, misconfigurations, or legitimate administrative tools to gain elevated access and control over resources generally restricted from regular users."
    },
    "09-Defense Evasion-The Hanged Man.webp": {
      "title": "The Hanged Man",
      "id": "TA0009",
      "tactic": "Defense Evasion",
      "description": "Defense Evasion consists of techniques that adversaries use to avoid detection throughout their intrusion. This can include deleting or altering logs, hiding software, and using obfuscation techniques."
    },
    "10-Credential Access-The Devil.webp": {
      "title": "The Devil",
      "id": "TA0010",
      "tactic": "Credential Access",
      "description": "Credential Access involves stealing or otherwise gaining access to credentials that are used within an organization. These can be user names and passwords, tokens, or application keys."
    },
    "11-Discovery-The Star.webp": {
      "title": "The Star",
      "id": "TA0011",
      "tactic": "Discovery",
      "description": "Discovery tactics are used to scope out the environment after gaining access. This can involve network and device enumeration, account discovery, and understanding system communications and services."
    },
    "12-Lateral Movement-The Fool.webp": {
      "title": "The Fool",
      "id": "TA0012",
      "tactic": "Lateral Movement",
      "description": "Lateral Movement refers to the techniques used to move through a network in search of key data and assets following the establishment of an initial foothold. It often involves the use of stolen credentials."
    },
    "13-Collection-The Hermit.webp": {
      "title": "The Hermit",
      "id": "TA0013",
      "tactic": "Collection",
      "description": "Collection includes the gathering of data of interest to the adversary's goals from the target network. This can include capturing screenshots, keystrokes, or data from user directories."
    },
    "15-Command and Control-The High Priestess.webp": {
      "title": "The High Priestess",
      "id": "TA0015",
      "tactic": "Command and Control",
      "description": "Command and Control involves maintaining communication with compromised systems to control them remotely, often channeling commands through encrypted channels or resilient network architectures."
    },
    "16-Exfiltration-The World.webp": {
      "title": "The World",
      "id": "TA0016",
      "tactic": "Exfiltration",
      "description": "Exfiltration refers to methods adversaries use to steal sensitive data from the network. Techniques can vary from compressed files transferred over common protocols to data encoded and exfiltrated in seemingly benign traffic."
    },
    "17-Impact-Death.webp": {
      "title": "Death",
      "id": "TA0017",
      "tactic": "Impact",
      "description": "Impact tactics aim to disrupt operations, destroy data, and destabilize the target, resulting in compromised integrity and availability of critical systems."
    }
  }


  Object.entries(response).forEach(([filename, { title, id, tactic, description }]) => {
    // Create container for each image and its details
    const card = document.createElement('div');
    card.classList.add('card');

    // Image element
    const imgElement = document.createElement('img');
    imgElement.src = `/img/${filename}`;
    imgElement.alt = `${title} (${id})`;
    imgElement.title = `${title} (${id})`;
    imgElement.classList.add('img-fluid', 'card-img-top'); // Bootstrap responsive images
    card.appendChild(imgElement);

    // Card body for text
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Tactic title
    const tacticTitle = document.createElement('h5');
    tacticTitle.classList.add('card-title');
    tacticTitle.textContent = `${tactic} (${id})`;
    cardBody.appendChild(tacticTitle);

    // Tactic description
    const tacticDesc = document.createElement('p');
    tacticDesc.classList.add('card-text');
    tacticDesc.textContent = title;
    cardBody.appendChild(tacticDesc);

    // Append the card body to the card
    card.appendChild(cardBody);

    // Add click event to show modal with description
    card.addEventListener('click', () => showDescription(title, id, description, filename));

    // Append the card to the grid
    grid.appendChild(card);
  });
}

function showDescription(title: string, id: string, description: string, imgSrc: string) {
  const sound_name = title.toLowerCase().split(' ').join('');
  const sound = new Audio('/voices/' + sound_name + '.wav');
  sound.play();

  const modalBody = document.getElementById('modal-body');
  if (modalBody) {
    modalBody.innerHTML = `<img src="img/${imgSrc}" style="width: auto%; height: auto;"><h5>${title} (${id})</h5><p>${description}</p>`;

    const modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();
  } else {
    console.error('Modal body element not found');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  loadImages();
});