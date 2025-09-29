import React, { useState } from "react";
import "./popup.css";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [selectedTab, setSelectedTab] = useState<'html-css' | 'nextjs'>('html-css');
  const [isLoading, setIsLoading] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    includeAssets: false,
    includeCustomCode: false,
    useAppDirectory: false
  });

  const handleCheckboxChange = (key: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handleDownload = async () => {
    setIsLoading(true);
    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsLoading(false);
    // You can add actual download logic here
  };

  return (
    <div className="popup-overlay">
      <div className="popup-window">
        <button className="popup-close-icon" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M16.5 5.5L5.5 16.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.5 5.5L16.5 16.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="popup-title">Code Export</div>
        <div className="popup-subtitle">Manage how you download your website's code.</div>
        
        <div className="export-options-container">
          <div className="tab-selector" data-active={selectedTab}>
            <button 
              className={`tab-button ${selectedTab === 'html-css' ? 'active' : ''}`}
              onClick={() => setSelectedTab('html-css')}
              disabled={isLoading}
            >
              HTML & CSS
            </button>
            <button 
              className={`tab-button ${selectedTab === 'nextjs' ? 'active' : ''}`}
              onClick={() => setSelectedTab('nextjs')}
              disabled={isLoading}
            >
              Next.js
            </button>
          </div>
          
          <div className="checklist-container">
            {selectedTab === 'html-css' ? (
              <>
                <div className="export-statement">
                  <div className="export-icon html-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                      <g clipPath="url(#clip0_1_117)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.139343 0L1.74416 17.9997L8.94631 20L16.168 17.998L17.7761 0H0.139343ZM14.2816 5.88867H5.83433L6.03615 8.14941H14.0814L13.4759 14.9268L8.94794 16.1816L4.42483 14.9268L4.11558 11.4583H6.33238L6.49025 13.221L8.94956 13.8835L8.95445 13.8818L11.4138 13.2178L11.6693 10.3548H4.01792L3.42385 3.67839H14.4818L14.2816 5.88867Z" fill="white" fillOpacity="0.8"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_117">
                          <rect width="17.6367" height="20" fill="white" transform="translate(0.139343)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="export-text">Export as HTML & CSS</span>
                  <span className="export-format">Zipped</span>
                </div>
                <div className="checkbox-item">
                  <label className="checkbox-label" onClick={() => handleCheckboxChange('includeAssets')}>
                    <input 
                      type="checkbox" 
                      checked={checkedItems.includeAssets}
                      onChange={() => handleCheckboxChange('includeAssets')}
                      className="checkbox-input"
                    />
                    <div className="checkbox-custom">
                      {checkedItems.includeAssets ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_100_assets)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" fill="#665DC0" stroke="#665DC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.0576 7.1875C14.1423 7.1875 14.222 7.2054 14.2969 7.24121C14.3717 7.27376 14.4368 7.31934 14.4922 7.37793C14.5508 7.43327 14.5964 7.49837 14.6289 7.57324C14.6647 7.64811 14.6826 7.72786 14.6826 7.8125C14.6826 7.98828 14.6224 8.13639 14.502 8.25684L9.3457 13.4131C9.22526 13.5335 9.07715 13.5938 8.90137 13.5938C8.72559 13.5938 8.57747 13.5335 8.45703 13.4131L5.48828 10.4443C5.36784 10.3239 5.30762 10.1758 5.30762 10C5.30762 9.91536 5.32389 9.83561 5.35645 9.76074C5.39225 9.68587 5.43783 9.62077 5.49316 9.56543C5.55176 9.50684 5.61849 9.46126 5.69336 9.42871C5.77148 9.3929 5.85124 9.375 5.93262 9.375C6.1084 9.375 6.25651 9.43522 6.37695 9.55566L8.90137 12.085L13.6133 7.36816C13.7337 7.24772 13.8818 7.1875 14.0576 7.1875Z" fill="white"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_100_assets">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_95_assets)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" stroke="#AFAFAF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_95_assets">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <span className="checkbox-text">Include assets (images, styles, fonts etc)</span>
                  </label>
                </div>
                <div className="checkbox-item">
                  <label className="checkbox-label" onClick={() => handleCheckboxChange('includeCustomCode')}>
                    <input 
                      type="checkbox" 
                      checked={checkedItems.includeCustomCode}
                      onChange={() => handleCheckboxChange('includeCustomCode')}
                      className="checkbox-input"
                    />
                    <div className="checkbox-custom">
                      {checkedItems.includeCustomCode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_100_custom)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" fill="#665DC0" stroke="#665DC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.0576 7.1875C14.1423 7.1875 14.222 7.2054 14.2969 7.24121C14.3717 7.27376 14.4368 7.31934 14.4922 7.37793C14.5508 7.43327 14.5964 7.49837 14.6289 7.57324C14.6647 7.64811 14.6826 7.72786 14.6826 7.8125C14.6826 7.98828 14.6224 8.13639 14.502 8.25684L9.3457 13.4131C9.22526 13.5335 9.07715 13.5938 8.90137 13.5938C8.72559 13.5938 8.57747 13.5335 8.45703 13.4131L5.48828 10.4443C5.36784 10.3239 5.30762 10.1758 5.30762 10C5.30762 9.91536 5.32389 9.83561 5.35645 9.76074C5.39225 9.68587 5.43783 9.62077 5.49316 9.56543C5.55176 9.50684 5.61849 9.46126 5.69336 9.42871C5.77148 9.3929 5.85124 9.375 5.93262 9.375C6.1084 9.375 6.25651 9.43522 6.37695 9.55566L8.90137 12.085L13.6133 7.36816C13.7337 7.24772 13.8818 7.1875 14.0576 7.1875Z" fill="white"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_100_custom">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_95_custom)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" stroke="#AFAFAF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_95_custom">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <span className="checkbox-text">Include custom code</span>
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className="export-statement">
                  <div className="export-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5.29752 7.5C3.10002 8.06667 1.66669 9.0375 1.66669 10.1458C1.66669 11.9017 5.33752 13.3333 9.87502 13.3333C10.4917 13.3333 10.925 13.3008 11.5 13.2525" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.19751 13.2499C7.85335 12.7533 7.52585 12.3058 7.21418 11.7499C4.92168 7.66661 4.30751 3.60827 5.85585 2.68911C6.81418 2.10827 8.39501 2.89994 10.0008 4.56744" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.35752 12.8225C4.77252 15.0625 4.89085 16.7525 5.82418 17.3183C7.31002 18.2183 10.3134 15.6867 12.5267 11.6483C12.8267 11.09 13.0959 10.5408 13.3334 10" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 15.4333C11.6067 17.1 13.1808 17.8917 14.1483 17.3108C15.69 16.3925 15.0825 12.3342 12.7875 8.25C12.4675 7.68583 12.14 7.24667 11.8042 6.75" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.7167 12.5C16.8933 11.9275 18.3333 10.9583 18.3333 9.85329C18.3333 8.09496 14.66 6.66663 10.1292 6.66663C9.50667 6.66663 9.07417 6.69079 8.5 6.73913" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.66669 10C6.90419 9.45004 7.17252 8.91004 7.47335 8.35171C9.67919 4.31504 12.6842 1.77671 14.1784 2.68421C15.1034 3.25004 15.23 4.93921 14.645 7.17838" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.2166 10.0125H10.2083C10.2 10.1209 10.1083 10.2125 9.99165 10.2125C9.87581 10.2068 9.78449 10.1118 9.78331 9.99587C9.78331 9.87921 9.87498 9.78754 9.98331 9.78754H9.97498C10.0833 9.77921 10.1833 9.87921 10.1833 9.98754" stroke="#D1D1D1" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="export-text">Export as NextJS Project</span>
                  <span className="export-format">Zipped</span>
                </div>
                <div className="checkbox-item">
                  <label className="checkbox-label" onClick={() => handleCheckboxChange('useAppDirectory')}>
                    <input 
                      type="checkbox" 
                      checked={checkedItems.useAppDirectory}
                      onChange={() => handleCheckboxChange('useAppDirectory')}
                      className="checkbox-input"
                    />
                    <div className="checkbox-custom">
                      {checkedItems.useAppDirectory ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_100_app)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" fill="#665DC0" stroke="#665DC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.0576 7.1875C14.1423 7.1875 14.222 7.2054 14.2969 7.24121C14.3717 7.27376 14.4368 7.31934 14.4922 7.37793C14.5508 7.43327 14.5964 7.49837 14.6289 7.57324C14.6647 7.64811 14.6826 7.72786 14.6826 7.8125C14.6826 7.98828 14.6224 8.13639 14.502 8.25684L9.3457 13.4131C9.22526 13.5335 9.07715 13.5938 8.90137 13.5938C8.72559 13.5938 8.57747 13.5335 8.45703 13.4131L5.48828 10.4443C5.36784 10.3239 5.30762 10.1758 5.30762 10C5.30762 9.91536 5.32389 9.83561 5.35645 9.76074C5.39225 9.68587 5.43783 9.62077 5.49316 9.56543C5.55176 9.50684 5.61849 9.46126 5.69336 9.42871C5.77148 9.3929 5.85124 9.375 5.93262 9.375C6.1084 9.375 6.25651 9.43522 6.37695 9.55566L8.90137 12.085L13.6133 7.36816C13.7337 7.24772 13.8818 7.1875 14.0576 7.1875Z" fill="white"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_100_app">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_95_app)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" stroke="#AFAFAF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_95_app">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <span className="checkbox-text">Use 'app' directory (NextJS v13+)</span>
                  </label>
                </div>
                <div className="checkbox-item">
                  <label className="checkbox-label" onClick={() => handleCheckboxChange('includeAssets')}>
                    <input 
                      type="checkbox" 
                      checked={checkedItems.includeAssets}
                      onChange={() => handleCheckboxChange('includeAssets')}
                      className="checkbox-input"
                    />
                    <div className="checkbox-custom">
                      {checkedItems.includeAssets ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_100_assets2)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" fill="#665DC0" stroke="#665DC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.0576 7.1875C14.1423 7.1875 14.222 7.2054 14.2969 7.24121C14.3717 7.27376 14.4368 7.31934 14.4922 7.37793C14.5508 7.43327 14.5964 7.49837 14.6289 7.57324C14.6647 7.64811 14.6826 7.72786 14.6826 7.8125C14.6826 7.98828 14.6224 8.13639 14.502 8.25684L9.3457 13.4131C9.22526 13.5335 9.07715 13.5938 8.90137 13.5938C8.72559 13.5938 8.57747 13.5335 8.45703 13.4131L5.48828 10.4443C5.36784 10.3239 5.30762 10.1758 5.30762 10C5.30762 9.91536 5.32389 9.83561 5.35645 9.76074C5.39225 9.68587 5.43783 9.62077 5.49316 9.56543C5.55176 9.50684 5.61849 9.46126 5.69336 9.42871C5.77148 9.3929 5.85124 9.375 5.93262 9.375C6.1084 9.375 6.25651 9.43522 6.37695 9.55566L8.90137 12.085L13.6133 7.36816C13.7337 7.24772 13.8818 7.1875 14.0576 7.1875Z" fill="white"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_100_assets2">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_95_assets2)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" stroke="#AFAFAF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_95_assets2">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <span className="checkbox-text">Include assets locally (images, styles, fonts etc)</span>
                  </label>
                </div>
                <div className="checkbox-item">
                  <label className="checkbox-label" onClick={() => handleCheckboxChange('includeCustomCode')}>
                    <input 
                      type="checkbox" 
                      checked={checkedItems.includeCustomCode}
                      onChange={() => handleCheckboxChange('includeCustomCode')}
                      className="checkbox-input"
                    />
                    <div className="checkbox-custom">
                      {checkedItems.includeCustomCode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_100_custom2)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" fill="#665DC0" stroke="#665DC0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.0576 7.1875C14.1423 7.1875 14.222 7.2054 14.2969 7.24121C14.3717 7.27376 14.4368 7.31934 14.4922 7.37793C14.5508 7.43327 14.5964 7.49837 14.6289 7.57324C14.6647 7.64811 14.6826 7.72786 14.6826 7.8125C14.6826 7.98828 14.6224 8.13639 14.502 8.25684L9.3457 13.4131C9.22526 13.5335 9.07715 13.5938 8.90137 13.5938C8.72559 13.5938 8.57747 13.5335 8.45703 13.4131L5.48828 10.4443C5.36784 10.3239 5.30762 10.1758 5.30762 10C5.30762 9.91536 5.32389 9.83561 5.35645 9.76074C5.39225 9.68587 5.43783 9.62077 5.49316 9.56543C5.55176 9.50684 5.61849 9.46126 5.69336 9.42871C5.77148 9.3929 5.85124 9.375 5.93262 9.375C6.1084 9.375 6.25651 9.43522 6.37695 9.55566L8.90137 12.085L13.6133 7.36816C13.7337 7.24772 13.8818 7.1875 14.0576 7.1875Z" fill="white"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_100_custom2">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <g clipPath="url(#clip0_1_95_custom2)">
                            <path d="M15 3.33337H4.99998C4.07951 3.33337 3.33331 4.07957 3.33331 5.00004V15C3.33331 15.9205 4.07951 16.6667 4.99998 16.6667H15C15.9205 16.6667 16.6666 15.9205 16.6666 15V5.00004C16.6666 4.07957 15.9205 3.33337 15 3.33337Z" stroke="#AFAFAF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_95_custom2">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>
                    <span className="checkbox-text">Include custom code</span>
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
        
        <div className="download-button-container">
          <button className="download-button" onClick={handleDownload} disabled={isLoading}>
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                <span>Downloading...</span>
              </>
            ) : (
              selectedTab === 'html-css' ? 'Download HTML CSS Project' : 'Download NextJS Project'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;