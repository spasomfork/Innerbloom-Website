import React, { useState } from 'react';
import { X, Copy, Check, Download, FileJson, Layers, Sparkles } from 'lucide-react';

interface ElementorTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ElementorTemplateModal: React.FC<ElementorTemplateModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services'>('home');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const elementorHomeSchema = {
    version: '0.4',
    title: 'InnerBloom - Home Page (Native Elementor Template)',
    type: 'page',
    content: [
      {
        id: 'hero_section',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          min_height: { unit: 'vh', size: 90 },
          background_background: 'classic',
          background_image: { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773' },
          background_overlay_background: 'classic',
          background_overlay_color: 'rgba(0,0,0,0.45)',
          padding: { top: 120, right: 20, bottom: 80, left: 20, unit: 'px' },
        },
        elements: [
          {
            id: 'hero_subheading',
            elType: 'widget',
            widgetType: 'heading',
            settings: {
              title: 'A peace of mind like never before.',
              header_size: 'p',
              title_color: '#a3c299',
              typography_typography: 'custom',
              typography_font_size: { unit: 'px', size: 16 },
              typography_font_weight: '500',
            },
          },
          {
            id: 'hero_title',
            elType: 'widget',
            widgetType: 'heading',
            settings: {
              title: 'Healing through\nCompassion,\nGrowth, and\nConnection',
              header_size: 'h1',
              title_color: '#ffffff',
              typography_typography: 'custom',
              typography_font_size: { unit: 'px', size: 54 },
              typography_font_weight: '700',
              typography_line_height: { unit: 'em', size: 1.15 },
            },
          },
          {
            id: 'hero_description',
            elType: 'widget',
            widgetType: 'text-editor',
            settings: {
              editor: 'At InnerBloom Somatic Psychotherapy, we help women navigate life\'s emotional transitions with a focus on healing trauma, reducing anxiety, and fostering personal growth.',
              text_color: '#e5e7eb',
              typography_typography: 'custom',
              typography_font_size: { unit: 'px', size: 16 },
            },
          },
          {
            id: 'hero_phone_button',
            elType: 'widget',
            widgetType: 'button',
            settings: {
              text: '113 334 433 221',
              link: { url: 'tel:113334433221' },
              selected_icon: { value: 'fas fa-phone', library: 'fa-solid' },
              button_type: 'default',
              typography_font_size: { unit: 'px', size: 18 },
              typography_font_weight: '700',
              button_text_color: '#ffffff',
              background_color: 'transparent',
            },
          },
        ],
      },
      {
        id: 'why_choose_us_section',
        elType: 'container',
        settings: {
          background_color: '#fbfbf9',
          padding: { top: 80, right: 20, bottom: 80, left: 20, unit: 'px' },
        },
        elements: [
          {
            id: 'wcu_heading',
            elType: 'widget',
            widgetType: 'heading',
            settings: {
              title: 'Why Choose Us',
              align: 'center',
              header_size: 'h2',
              title_color: '#1a2618',
            },
          },
          {
            id: 'wcu_grid_cards',
            elType: 'container',
            settings: {
              flex_direction: 'row',
              flex_wrap: 'wrap',
              gap: { unit: 'px', size: 24 },
            },
            elements: [
              {
                id: 'card_1',
                elType: 'widget',
                widgetType: 'icon-box',
                settings: {
                  selected_icon: { value: 'far fa-heart', library: 'fa-regular' },
                  title_text: 'Personalized Care',
                  description_text: 'We tailor each session to your unique needs, creating a supportive space where you feel heard and understood.',
                  primary_color: '#557c4a',
                },
              },
              {
                id: 'card_2',
                elType: 'widget',
                widgetType: 'icon-box',
                settings: {
                  selected_icon: { value: 'fas fa-seedling', library: 'fa-solid' },
                  title_text: 'Experienced and Compassionate Therapist',
                  description_text: 'As a somatic therapist with extensive experience, I\'m dedicated to supporting women in healing from trauma and anxiety',
                  primary_color: '#557c4a',
                },
              },
              {
                id: 'card_3',
                elType: 'widget',
                widgetType: 'icon-box',
                settings: {
                  selected_icon: { value: 'fas fa-shield-alt', library: 'fa-solid' },
                  title_text: 'Safe and Nurturing Environment',
                  description_text: 'Our practice provides a safe, confidential, and nurturing environment where you can explore your emotions, process trauma, and find balance.',
                  primary_color: '#557c4a',
                },
              },
              {
                id: 'card_4',
                elType: 'widget',
                widgetType: 'icon-box',
                settings: {
                  selected_icon: { value: 'fas fa-user-check', library: 'fa-solid' },
                  title_text: 'Focus on Women\'s Wellness',
                  description_text: 'Our practice provides targeted support for women aged 25-50 during life\'s emotional transitions, focusing on trauma recovery, anxiety management, and personal growth',
                  primary_color: '#557c4a',
                },
              },
            ],
          },
          {
            id: 'stats_counters',
            elType: 'container',
            settings: { flex_direction: 'row', justify_content: 'space-around' },
            elements: [
              { elType: 'widget', widgetType: 'counter', settings: { starting_number: 0, ending_number: 18, title: 'Home Delivery' } },
              { elType: 'widget', widgetType: 'counter', settings: { starting_number: 0, ending_number: 28, title: 'Happy People' } },
              { elType: 'widget', widgetType: 'counter', settings: { starting_number: 0, ending_number: 115, title: 'Tons Of Goods' } },
              { elType: 'widget', widgetType: 'counter', settings: { starting_number: 0, ending_number: 1, title: 'Personalization Of Sessions' } },
            ],
          },
        ],
      },
      {
        id: 'testimonials_section',
        elType: 'container',
        settings: { background_color: '#ffffff', padding: { top: 80, bottom: 80 } },
        elements: [
          {
            elType: 'widget',
            widgetType: 'heading',
            settings: { title: 'What Our Clients Say', align: 'center' },
          },
          {
            elType: 'widget',
            widgetType: 'testimonial',
            settings: {
              testimonial_content: 'If you are looking for some awesome, knowledgeable people to work with, these are the guys I highly recommend.',
              testimonial_name: 'Firstname Surname',
              testimonial_job: 'DESIGNER',
            },
          },
        ],
      },
      {
        id: 'faq_section',
        elType: 'container',
        elements: [
          {
            elType: 'widget',
            widgetType: 'accordion',
            settings: {
              tabs: [
                { tab_title: 'Why should I choose your company?', tab_content: 'Use this space to answer the commonly asked question you\'ve mentioned above.' },
                { tab_title: 'How can somatic therapy help with anxiety?', tab_content: 'Somatic therapy bridges the gap between physical sensation and emotional regulation.' },
                { tab_title: 'Is you worker is certified ?', tab_content: 'Yes, licensed somatic psychotherapist.' },
              ],
            },
          },
        ],
      },
      {
        id: 'contact_form_section',
        elType: 'container',
        elements: [
          {
            elType: 'widget',
            widgetType: 'form',
            settings: {
              form_name: 'InnerBloom Contact Form',
              form_fields: [
                { custom_id: 'first_name', field_type: 'text', field_label: 'First Name', required: 'true' },
                { custom_id: 'last_name', field_type: 'text', field_label: 'Last Name', required: 'true' },
                { custom_id: 'email', field_type: 'email', field_label: 'Email', required: 'true' },
                { custom_id: 'message', field_type: 'textarea', field_label: 'Comment or Message', required: 'true' },
              ],
              button_text: 'Contact Us',
              button_background_color: '#5e8252',
            },
          },
        ],
      },
    ],
  };

  const elementorAboutSchema = {
    version: '0.4',
    title: 'InnerBloom - About Page (Native Elementor Template)',
    type: 'page',
    content: [
      {
        id: 'about_hero',
        elType: 'container',
        settings: {
          min_height: { unit: 'vh', size: 60 },
          background_background: 'classic',
          background_image: { url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
          shape_divider_bottom: 'curve',
        },
        elements: [
          {
            elType: 'widget',
            widgetType: 'heading',
            settings: { title: 'About Us', align: 'center', header_size: 'h1', title_color: '#ffffff' },
          },
          {
            elType: 'widget',
            widgetType: 'text-editor',
            settings: {
              editor: 'Hi, I\'m [Your Name]. As a somatic therapist, I specialize in helping women heal from trauma and anxiety by reconnecting with their bodies...',
              align: 'center',
              text_color: '#f3f4f6',
            },
          },
        ],
      },
      {
        id: 'mission_vision_values',
        elType: 'container',
        settings: { flex_direction: 'row' },
        elements: [
          {
            elType: 'widget',
            widgetType: 'icon-box',
            settings: {
              selected_icon: { value: 'fas fa-user-alt', library: 'fa-solid' },
              title_text: 'Mission',
              description_text: 'At InnerBloom, we are guided by compassion, authenticity, and the belief in every woman\'s potential for growth.',
            },
          },
          {
            elType: 'widget',
            widgetType: 'icon-box',
            settings: {
              selected_icon: { value: 'fas fa-lightbulb', library: 'fa-solid' },
              title_text: 'Vision',
              description_text: 'At InnerBloom, we are guided by compassion, authenticity, and the belief in every woman\'s potential for growth.',
            },
          },
          {
            elType: 'widget',
            widgetType: 'icon-box',
            settings: {
              selected_icon: { value: 'fas fa-trophy', library: 'fa-solid' },
              title_text: 'Values',
              description_text: 'At InnerBloom, we are guided by compassion, authenticity, and the belief in every woman\'s potential for growth.',
            },
          },
        ],
      },
      {
        id: 'video_section',
        elType: 'container',
        elements: [
          {
            elType: 'widget',
            widgetType: 'video',
            settings: {
              video_type: 'youtube',
              youtube_url: 'https://www.youtube.com/watch?v=sz6-F1wYFkw',
              autoplay: 'yes',
              mute: 'yes',
              loop: 'yes',
              controls: 'yes',
              lazy_load: 'yes',
            },
          },
        ],
      },
    ],
  };

  const elementorServicesSchema = {
    version: '0.4',
    title: 'InnerBloom - Services Page (Native Elementor Template)',
    type: 'page',
    content: [
      {
        id: 'services_hero',
        elType: 'container',
        settings: {
          background_image: { url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e' },
          shape_divider_bottom: 'curve',
        },
        elements: [
          { elType: 'widget', widgetType: 'heading', settings: { title: 'Services', align: 'center' } },
        ],
      },
      {
        id: 'services_grid',
        elType: 'container',
        settings: { flex_direction: 'row' },
        elements: [
          {
            elType: 'widget',
            widgetType: 'image-box',
            settings: {
              image: { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac' },
              title_text: 'Mindfulness-Based Therapy:',
              description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
          },
          {
            elType: 'widget',
            widgetType: 'image-box',
            settings: {
              image: { url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946' },
              title_text: 'Trauma Recovery',
              description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
          },
          {
            elType: 'widget',
            widgetType: 'image-box',
            settings: {
              image: { url: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e' },
              title_text: 'Emotional Transitions',
              description_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
          },
        ],
      },
      {
        id: 'services_cta',
        elType: 'container',
        settings: {
          background_background: 'gradient',
          color: '#559c7f',
          color_b: '#3f7c63',
        },
        elements: [
          { elType: 'widget', widgetType: 'heading', settings: { title: 'Take Action Now.', align: 'center' } },
          { elType: 'widget', widgetType: 'button', settings: { text: 'BOOK A SESSION', link: { url: '#booking' } } },
        ],
      },
    ],
  };

  const getActiveSchema = () => {
    switch (activeTab) {
      case 'home':
        return elementorHomeSchema;
      case 'about':
        return elementorAboutSchema;
      case 'services':
        return elementorServicesSchema;
    }
  };

  const jsonString = JSON.stringify(getActiveSchema(), null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `innerbloom-elementor-${activeTab}-template.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="elementor-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="elementor-modal-container"
        className="relative w-full max-w-3xl bg-[#182117] text-gray-200 rounded-2xl shadow-2xl border border-emerald-800/40 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#121a11] border-b border-emerald-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#5e8252] flex items-center justify-center text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Elementor JSON Template Generator</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Native Widgets Only
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Reverse-engineered responsive templates ready for Elementor import
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="px-6 py-2.5 bg-[#141d13] border-b border-emerald-900/20 flex items-center justify-between flex-wrap gap-2">
          <div className="flex gap-2">
            {(['home', 'about', 'services'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold capitalize transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#5e8252] text-white shadow-sm'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                {tab} Template
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied JSON' : 'Copy JSON'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-600 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .json</span>
            </button>
          </div>
        </div>

        {/* JSON Preview Codebox */}
        <div className="p-4 sm:p-6 overflow-y-auto font-mono text-xs text-emerald-200/90 bg-[#0d140c] flex-1">
          <pre className="whitespace-pre-wrap select-all leading-relaxed">
            {jsonString}
          </pre>
        </div>

        {/* Footer info note */}
        <div className="px-6 py-3 bg-[#121a11] border-t border-emerald-900/40 text-[11px] text-gray-400 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <FileJson className="w-3.5 h-3.5 text-emerald-400" />
            Directly compatible with Elementor Templates &gt; Import Templates in WordPress.
          </span>
          <span className="text-emerald-400/80 font-mono">100% Native Widgets</span>
        </div>
      </div>
    </div>
  );
};
