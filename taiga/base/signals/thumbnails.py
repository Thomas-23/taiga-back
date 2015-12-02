# Copyright (C) 2014-2015 Andrey Antukh <niwi@niwi.be>
# Copyright (C) 2014-2015 Jesús Espino <jespinog@gmail.com>
# Copyright (C) 2014-2015 David Barragán <bameda@dbarragan.com>
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

from django_transactional_cleanup.signals import cleanup_post_delete
from easy_thumbnails.files import get_thumbnailer


def _delete_thumbnail_files(**kwargs):
    thumbnailer = get_thumbnailer(kwargs["file"])
    thumbnailer.delete_thumbnails()


def connect_thumbnail_signals():
    cleanup_post_delete.connect(_delete_thumbnail_files)


def disconnect_thumbnail_signals():
    cleanup_post_delete.disconnect(_delete_thumbnail_files)