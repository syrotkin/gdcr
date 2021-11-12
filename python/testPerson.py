from person import Person
import unittest
  
class PersonTest(unittest.TestCase):
  
    def testName(self):
        bob = Person('Bob')
        self.assertEqual(bob.name, 'Bob')
  
if __name__ == '__main__':
    unittest.main()