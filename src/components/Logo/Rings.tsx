// Internals
import { clsx } from '@/utils'

export type RingsProps = React.SVGProps<SVGSVGElement> & {
  animate?: boolean
}

export const Rings = ({ animate, ...props }: RingsProps): JSX.Element => {
  return (
    <svg
      fill="none"
      height={717}
      viewBox="0 0 733 717"
      width={733}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M213.324 307.353v-43.869c0-27.692 22.636-50.16 50.553-50.16h101.556c85.379 0 154.58 68.64 154.58 153.345 0 84.704-69.201 153.344-154.58 153.344H263.877c-27.917 0-50.553-22.468-50.553-50.16v-162.5z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M263.877 732.281C118.901 732.281 1 614.548 1 469.797V263.484C1 118.733 118.958 1 263.877 1h101.556c49.205 0 97.118 9.605 142.335 28.59 43.645 18.312 82.851 44.544 116.497 77.909 33.759 33.477 60.327 72.572 78.92 116.216 19.322 45.386 29.152 93.467 29.152 142.953 0 49.486-9.83 97.568-29.152 142.954-18.593 43.588-45.161 82.682-78.92 116.216-33.646 33.365-72.852 59.597-116.497 77.908-45.217 18.986-93.074 28.591-142.335 28.591H263.877v-.056z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.1}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M263.877 701.949c-128.237 0-232.545-104.14-232.545-232.152V263.484c0-128.012 104.308-232.152 232.545-232.152h101.556c45.161 0 89.086 8.819 130.596 26.231 40.049 16.796 75.998 40.836 106.892 71.449 30.95 30.725 55.327 66.562 72.347 106.555 17.75 41.622 26.737 85.716 26.737 131.045 0 45.386-8.987 89.48-26.737 131.046-17.076 39.993-41.397 75.83-72.347 106.555-30.894 30.613-66.843 54.653-106.892 71.448-41.454 17.413-85.379 26.232-130.596 26.232H263.877v.056z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.2}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M263.877 671.617c-111.498 0-202.213-90.547-202.213-201.82V263.484c0-111.274 90.715-201.82 202.213-201.82h101.556c41.116 0 81.11 8.032 118.856 23.872 36.455 15.278 69.146 37.185 97.231 65.045 28.197 27.973 50.328 60.552 65.831 96.95 16.121 37.803 24.322 77.908 24.322 119.137s-8.201 81.335-24.322 119.138c-15.503 36.342-37.634 68.977-65.831 96.949-28.085 27.861-60.833 49.767-97.287 65.046-37.747 15.84-77.74 23.872-118.856 23.872h-101.5v-.056z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.3}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M263.877 641.285c-94.759 0-171.881-76.953-171.881-171.488V263.484c0-94.535 77.122-171.488 171.881-171.488h101.556c37.072 0 73.133 7.246 107.116 21.513 32.86 13.762 62.349 33.478 87.626 58.586 25.389 25.164 45.329 54.541 59.26 87.288 14.492 34.039 21.85 70.101 21.85 107.285 0 37.185-7.358 73.246-21.85 107.286-13.987 32.747-33.927 62.124-59.26 87.288-25.333 25.108-54.766 44.824-87.626 58.586-33.983 14.267-70.044 21.513-107.116 21.513H263.877v-.056z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.4}
        strokeWidth={2}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M263.877 610.953c-78.077 0-141.549-63.304-141.549-141.156V263.484c0-77.852 63.528-141.156 141.549-141.156h101.556c33.028 0 65.101 6.459 95.377 19.154 29.208 12.245 55.496 29.826 78.02 52.182 22.581 22.412 40.331 48.531 52.744 77.627 12.919 30.276 19.435 62.349 19.435 95.378 0 33.028-6.516 65.101-19.435 95.377-12.413 29.152-30.163 55.271-52.744 77.627-22.524 22.356-48.755 39.881-78.02 52.182-30.276 12.695-62.349 19.154-95.377 19.154H263.877v-.056z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.5}
        strokeWidth={2}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M263.877 580.621c-61.338 0-111.217-49.711-111.217-110.824V263.484c0-61.114 49.879-110.824 111.217-110.824h101.556c28.984 0 57.125 5.617 83.637 16.795 25.614 10.728 48.644 26.119 68.359 45.722 19.772 19.604 35.332 42.521 46.229 68.022 11.29 26.457 17.019 54.542 17.019 83.469 0 28.928-5.729 57.013-17.019 83.469-10.897 25.502-26.4 48.363-46.229 68.023-19.771 19.603-42.745 34.994-68.359 45.722-26.512 11.122-54.653 16.795-83.637 16.795H263.877v-.056z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.6}
        strokeWidth={3}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M263.877 550.289c-44.599 0-80.885-36.117-80.885-80.492V263.484c0-44.375 36.286-80.492 80.885-80.492h101.556c24.939 0 49.093 4.83 71.898 14.435 22.018 9.212 41.79 22.469 58.754 39.32 16.963 16.851 30.332 36.51 39.656 58.361 9.661 22.692 14.548 46.789 14.548 71.561 0 24.827-4.887 48.868-14.548 71.56-9.324 21.907-22.693 41.51-39.656 58.361-16.964 16.851-36.736 30.051-58.754 39.32-22.805 9.549-46.959 14.435-71.898 14.435H263.877v-.056z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.7}
        strokeWidth={3}
      />
      <path
        className={clsx(animate && 'animate-pulse')}
        d="M213.324 307.353v-43.869c0-27.692 22.636-50.16 50.553-50.16h101.556c85.379 0 154.58 68.64 154.58 153.345 0 84.704-69.201 153.344-154.58 153.344H263.877c-27.917 0-50.553-22.468-50.553-50.16v-162.5z"
        stroke="#29ABE2"
        strokeMiterlimit={10}
        strokeOpacity={0.8}
        strokeWidth={3}
      />
    </svg>
  )
}

export default Rings
