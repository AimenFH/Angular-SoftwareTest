import { setupCourses } from "./setup-test-data";
import { COURSES } from '../../../../server/db-data';

describe('check setupCourses function', () = {

  it('should return a sorted array of courses', () = {
  const courses = setupCourses();
  expect(courses).toBeDefined();
  expect(courses.length).toBe(Object.keys(COURSES).length);

for (let i = 0; i  courses.length - 1; i++) {
  expect(courses[i].seqNo).toBeLessThanOrEqual(courses[i + 1].seqNo);
}
});

it('should return an empty array if there are no courses', () = {
  const originalCourses = { ...COURSES };
  Object.keys(COURSES).forEach(key = delete COURSES[key]);

  const courses = setupCourses();
  expect(courses).toEqual([]);

  Object.assign(COURSES, originalCourses);
});

});
