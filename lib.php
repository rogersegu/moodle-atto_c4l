<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto - Components for Learning functions file.
 *
 * @package    atto_c4l
 * @copyright  2021 Roger Segú {@link https://rogersegu.me}
 * @author     Roger Segú {@link https://rogersegu.me}
 * @author     Based on code originally written by Justin Hunt {@link https://poodll.com}.
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();


/**
 * Initializes the strings required for the JS.
 * 
 * @param string $elementid
 */
function atto_c4l_strings_for_js() {
    global $PAGE;

    $PAGE->requires->strings_for_js(array('dialogtitle',
                                          'contextual',
                                          'procedural',
                                          'evaluative',
                                          'helper',
                                          'keyconcept',
                                          'tip',
                                          'reminder',
                                          'attention',
                                          'quote',
                                          'dodontcards',
                                          'readingcontext',
                                          'example',
                                          'figure',
                                          'tag',
                                          'estimatedtime',
                                          'duedate',
                                          'proceduralcontext',
                                          'gradingvalue',
                                          'expectedfeedback',
                                          'allpurposecard',
                                          'inlinetag',
                                          'learningoutcomes'),
                                      'atto_c4l');
}
