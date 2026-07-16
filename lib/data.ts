import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'abhipsabose80@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Abhipsa, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/abhizz-b' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/abhipsab0' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'Dart', icon: '/logo/dart.svg' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Streamlit', icon: '/logo/streamlit.svg' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    mobile_ai: [
        { name: 'Flutter', icon: '/logo/flutter.svg' },
        { name: 'MediaPipe', icon: '/logo/mediapipe.svg' },
        { name: 'Groq', icon: '/logo/groq.svg' },
        { name: 'Hugging Face', icon: '/logo/huggingface.svg' },
    ],
    backend: [
        { name: 'Python', icon: '/logo/python.svg' },
        { name: 'Flask', icon: '/logo/flask.svg' },
        { name: 'REST APIs', icon: '/logo/api.svg' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'Firebase', icon: '/logo/firebase.svg' },
        { name: 'SQLite', icon: '/logo/sqlite.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
        { name: 'VS Code', icon: '/logo/vscode.svg' },
        { name: 'Android Studio', icon: '/logo/android-studio.svg' },
        { name: 'Figma', icon: '/logo/figma.svg' },
        { name: 'Vercel', icon: '/logo/vercel.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'AI Fake News Detector',
        slug: 'ai-fake-news-detector',
        sourceCode: 'https://github.com/Abhizz-b/fake_news_detector',
        liveUrl: 'https://fake-news-detector-abhiz.streamlit.app/',
        techStack: [
            'Python',
            'Streamlit',
            'Groq LLM',
            'Google Gemini Embeddings',
            'DuckDuckGo Search',
            'SQLite',
            'ReportLab',
        ],
        thumbnail: '/projects/thumbnail/fake-news-detector.jpg',
        longThumbnail: '/projects/long/fake-news-detector.jpg',
        images: [
            '/projects/images/fake-news-detector-1.png',
            '/projects/images/fake-news-detector-2.png',
        ],
        year: 2026,
        description: `
      An AI-powered fact-checking web application that delivers evidence-backed verdicts on news claims. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🔍 Semantic Search: Uses Google Gemini Embeddings to find relevant evidence</li>
        <li>🤖 AI Verdicts: Groq LLMs analyze claims against retrieved evidence</li>
        <li>🔐 Authentication: Secure user login system</li>
        <li>📄 PDF Export: Generates shareable fact-check reports with ReportLab</li>
      </ul>
      `,
        role: `Solo Developer <br/>
        Built the entire application end-to-end:
        <ul>
          <li>✅ Integrated Groq LLMs and Gemini Embeddings for fact verification</li>
          <li>🔎 Implemented semantic search and DuckDuckGo-based evidence retrieval</li>
          <li>🖥️ Built the frontend and app flow with Streamlit</li>
          <li>🚀 Deployed on Streamlit Community Cloud</li>
        </ul>
        `,
    },
    {
        title: 'DermaCam',
        slug: 'dermacam',
        sourceCode: 'https://github.com/Abhizz-b/Dermascan',
        liveUrl: '',
        techStack: [
            'Flutter',
            'Python Flask',
            'Groq (Llama 4)',
            'Hugging Face',
            'PostgreSQL',
            'Firebase',
        ],
        thumbnail: '/projects/thumbnail/dermacam.jpg',
        longThumbnail: '/projects/long/dermacam.jpg',
        images: [
            '/projects/images/dermacam-1.png',
            '/projects/images/dermacam-2.png',
        ],
        year: 2026,
        description: `
      An AI-powered dermatology app that integrates six ML models using concurrent execution for skin diagnosis. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🧠 Six ML Models: Concurrent execution for faster, comprehensive skin analysis</li>
        <li>🎙️ Voice AI: Enhanced accessibility through voice interaction</li>
        <li>🔗 REST APIs: Backend services connecting Flutter frontend to Flask backend</li>
      </ul>
      `,
        role: `Concept Originator & UI/UX Lead <br/>
        As part of a group project, I:
        <ul>
          <li>💡 Originated the concept and led UI/UX direction</li>
          <li>🎨 Led frontend development in Flutter</li>
          <li>🔗 Collaborated on integrating voice AI and REST APIs</li>
          <li>⚡ Helped optimize multi-model processing workflows</li>
        </ul>
        `,
    },
    {
        title: 'PoseMuse',
        slug: 'posemuse',
        sourceCode: 'https://github.com/Abhizz-b/Pose_Muse',
        liveUrl: '',
        techStack: ['Flutter', 'Firebase', 'MediaPipe', 'Google ML Kit'],
        thumbnail: '/projects/thumbnail/posemuse.jpg',
        longThumbnail: '/projects/long/posemuse.jpg',
        images: [
            '/projects/images/posemuse-1.png',
            '/projects/images/posemuse-2.png',
        ],
        year: 2026,
        description: `
      A Flutter application for real-time, multi-person pose detection built with MediaPipe and Google ML Kit. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🏃 Real-Time Detection: Multi-person pose tracking with smooth performance</li>
        <li>🔐 Firebase Auth: Secure user management</li>
        <li>☁️ Firestore & Storage: Data persistence for user sessions</li>
      </ul>
      `,
        role: `Developer (Ongoing) <br/>
        <ul>
          <li>📱 Developing the Flutter app for real-time pose detection</li>
          <li>🔗 Integrated Firebase Authentication, Firestore, and Storage</li>
          <li>⚡ Optimized camera frame processing for smooth performance</li>
        </ul>
        `,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer Intern',
        company: 'Clickites',
        duration: 'Nov 2025 - Jan 2026',
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Morning Breeze Foundation (NGO)',
        duration: 'Oct 2025 - Nov 2025',
    },
    {
        title: 'Frontend Developer Intern',
        company: 'Harkaswanen',
        duration: 'Aug 2025 - Oct 2025',
    },
];
