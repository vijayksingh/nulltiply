
## Todo

- [ ] Enable Responsive mode for Stack page
- [ ] Enable response mode for Learning page
- [ ] Update configuration
- [ ] Refactor TIL page to take posts from a TIL directory and convert it into TIL Group Interface and render them
- [ ] Clicking on each TIL entry should move it to a individual post.
- [ ] Apply the same pattern to Proof of work page also. 
- [ ] Refactor Proof of Work component into Projects.


## Component
- Implement Retro Grid Component
- Different Components for TIL
  - Lessons
  - Projects
  - TIL
  - Lecture
  - Book


## Posts
- Add post about how to implement TIL component.
- 



## Ideas
- Background image from this article ?
  https://jwiegley.github.io/git-from-the-bottom-up/


- TIL inspiration 
https://til.bhupesh.me/#aws


- add some retro futuristic pixel art to your home page.

- add matrix rain effect on home page header

- theme of the blog (black and green)


- add confetti if user finishes reading the post

- add retro grid on the top of home page


```






// src/pages/index.tsx or src/app/page.tsx (depending on your Next.js version)

import RetroGrid from '../components/RetroGrid';
import Header from '../components/Header';
import PostsScroller from '../components/PostsScroller';
import Streaks from '../components/Streaks';
import ProjectsList from '../components/ProjectsList';
import Notes from '../components/Notes';

export default function Home() {
  return (
    <div className="home-container">
      <RetroGrid />
      <Header />
      <div className="retro-personality">8 bit retro type personality</div>
      <PostsScroller />
      <Streaks />
      <ProjectsList />
      <Notes />
    </div>
  );
}
