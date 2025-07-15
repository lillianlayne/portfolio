import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ScrollShrinkingSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Track scroll progress relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Transform scroll progress to width (100vw to 96vw)
  const width = useTransform(scrollYProgress, [0, 1], ['100vw', '96vw']);

  // Optional: Add subtle rounded corners as it shrinks
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['0px', '8px']);

  // Update header height continuously
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    // Initial measurement
    updateHeaderHeight();

    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);

    // Use ResizeObserver to track header size changes
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className='relative'>
      {/* First div - 100vh container */}
      <div ref={containerRef} className='relative h-screen'>
        {/* First element - shrinking sticky element */}
        <motion.div
          ref={headerRef}
          style={{
            width,
            borderRadius,
          }}
          className='sticky top-0 z-10 flex h-auto items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white'
        >
          <div className='p-8 text-center'>
            <h1 className='mb-4 text-4xl font-bold'>Shrinking Sticky Header</h1>
            <p className='text-xl'>
              This element shrinks from 100vw to 96vw as you scroll
            </p>
          </div>
        </motion.div>

        {/* Content below the header - positioned absolutely with top offset */}
        <div
          className='absolute inset-0 mx-8 rounded-lg bg-white/10 text-white backdrop-blur-sm'
          style={{
            top: `${headerHeight}px`,
            height: `calc(100vh - ${headerHeight}px)`,
          }}
        >
          <div className='h-full overflow-auto p-8'>
            <h2 className='mb-4 text-2xl font-semibold'>Container Content</h2>
            <p className='mb-6 text-lg leading-relaxed'>
              This content stays below the shrinking header and adjusts its
              height dynamically. The container height is calculated as 100vh
              minus the header height.
            </p>
            <div className='space-y-4'>
              <p className='text-lg leading-relaxed'>
                As you scroll and the header shrinks, this content area
                maintains its position below the header while the next sibling
                div stays properly positioned right below the main container.
              </p>
              <p className='text-lg leading-relaxed'>
                The container uses absolute positioning with a dynamic top
                offset to stay below the sticky header regardless of its height.
              </p>
              <p className='text-lg leading-relaxed'>
                Header height is currently: {headerHeight}px
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional content to demonstrate the effect */}
      <div className='min-h-screen bg-gray-100 p-8'>
        <h2 className='mb-6 text-3xl font-bold text-gray-800'>
          Next Sibling Content
        </h2>
        <div className='mx-auto max-w-4xl space-y-6'>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className='rounded-lg bg-white p-6 shadow-md'>
              <h3 className='mb-3 text-xl font-semibold'>
                Content Block {i + 1}
              </h3>
              <p className='leading-relaxed text-gray-600'>
                This is the next sibling div that should be positioned right
                below the main container. The sticky header will remain at the
                top until the first container is completely scrolled off screen.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Even more content */}
      <div className='min-h-screen bg-gray-200 p-8'>
        <h2 className='mb-6 text-3xl font-bold text-gray-800'>Final Section</h2>
        <div className='mx-auto max-w-4xl'>
          <div className='rounded-lg bg-white p-8 shadow-md'>
            <p className='text-lg leading-relaxed text-gray-600'>
              Once you've scrolled past the first 100vh container completely,
              the sticky header will no longer be visible. This demonstrates the
              complete behavior you requested.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
