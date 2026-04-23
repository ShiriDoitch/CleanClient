import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**', // תופס את כל הנתיבים
    renderMode: RenderMode.Prerender
  }
];